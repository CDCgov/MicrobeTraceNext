using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BPaaSDTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestSharp;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MicrobeTraceNext.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AddBlockController : ControllerBase
    {

        private readonly ILogger<AddBlockController> _logger;

        public AddBlockController(ILogger<AddBlockController> logger)
        {
            _logger = logger;
        }

        //public AddBlockController(IConfiguration iConfig)
        //{
        //    configuration = iConfig;
        //}

        [HttpPost]
        public async Task<AddBlockResponse> PostAsync(AddBlockDto input)
        {
            AddBlockResponse result = new AddBlockResponse();

            string token = AppSettings.Settings.Token;
            string baseUrl = AppSettings.Settings.BaseUrl;


            string hash =  await GetBlockChainHashCodeController.GetBlockchainHash(); 

            try
            {

                var client = new RestClient(baseUrl);
                var request = new RestRequest("addblock", Method.POST);
                //request.AddParameter("TenantID", AbpSession.TenantId, ParameterType.HttpHeader);
                request.AddParameter("TenantID", "0", ParameterType.HttpHeader);
                request.AddParameter("UserID", "0", ParameterType.HttpHeader);
                request.AddParameter("UpdatedByUserID", input.UpdatedByUserId, ParameterType.HttpHeader);
                request.AddParameter("RequestingUserID", input.UserID, ParameterType.HttpHeader);
                request.AddParameter("LedgerName", input.LedgerName, ParameterType.HttpHeader);
                request.AddParameter("IsFile", input.IsFile, ParameterType.HttpHeader);
                request.AddParameter("FileExtension", input.FileExtension, ParameterType.HttpHeader);
                request.AddParameter("SaveTextAsFile", input.SaveTextAsFile, ParameterType.HttpHeader);
                request.AddParameter("IsSmartContract", input.IsSmartContract, ParameterType.HttpHeader);
                request.AddParameter("BlockName", input.BlockName, ParameterType.HttpHeader);
                //request.AddParameter("BlockName", "ATLANTA9990000000001", ParameterType.HttpHeader);

                request.AddParameter("BlockDescription", input.BlockDescription, ParameterType.HttpHeader);
                request.AddParameter("BlockProofHash", input.BlockProofHash, ParameterType.HttpHeader);

                if (hash != null)
                    request.AddParameter("BlockchainProofHash", hash, ParameterType.HttpHeader);
                else
                    request.AddParameter("BlockchainProofHash", input.BlockchainProofHash, ParameterType.HttpHeader);


                request.AddParameter("IsActive", input.IsActive, ParameterType.HttpHeader);
                request.AddParameter("BPAASToken", token, ParameterType.HttpHeader);
                request.AddParameter("BPAASRoles", string.Empty, ParameterType.HttpHeader);

                //format json to match with bpaas service format to allow querying
                //string formattedJson1 = input.Body.Replace("\"", "\\u022");  //input.Body.Replace('"', '\'');
                //formattedJson1 = "{"BpaaSPayload":" + formattedJson1 + "}";

                dynamic body = JsonConvert.DeserializeObject<dynamic>(input.Body);

                BpaasPayload payload = new BpaasPayload(body);

                string formattedBody = JsonConvert.SerializeObject(payload);

                //string formattedJson = formattedBody.Replace("\\", "");//.Replace("\"", "\\u022");


                request.AddParameter("body", formattedBody, ParameterType.RequestBody);


                IRestResponse response = await client.ExecuteAsync(request);


                if (response != null)
                {
                    var tempresult = JsonConvert.DeserializeObject<dynamic>(response.Content);

                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {

                        try
                        {
                            result = JsonConvert.DeserializeObject<AddBlockResponse>(tempresult);
                        }
                        catch (Exception ex)
                        {
                            result.message = "Fail to deserilaized the response";
                        }

                        result.success = true;
                        result.message = result.statusMessage;

                    }
                    else
                    {
                      
                        result.success = false;

                        try
                        {
                            AddBlockResponse temp = JsonConvert.DeserializeObject<AddBlockResponse>(tempresult);


                            result.message = CleanUpErrroMessage(temp.statusMessage);

                        }
                        catch (Exception ex)
                        {

                            result.message = CleanUpErrroMessage(tempresult);

                        }


                    }
                }
                else
                {
                    result.success = false;
                    result.message = "BPaaS Service retunred null response";
                }

            }
            catch (Exception e)
            {
                Console.WriteLine("{0} Exception caught.", e);
                result.success = false;
                result.message = e.Message;

            }
            return result;

        }

        private string CleanUpErrroMessage (string bPaaSMessage)
        {
            if (bPaaSMessage == null)
                return "An error occurred, please try again";

            if(bPaaSMessage.Contains("Error attempting to update block in blockchain The block proof hash was invalid."))
            {
                return "The record already exists for this patient. Please search for the existing record and update it instead!";
            }
            else
            {
                
                return bPaaSMessage;
            }
        }


    }
}
