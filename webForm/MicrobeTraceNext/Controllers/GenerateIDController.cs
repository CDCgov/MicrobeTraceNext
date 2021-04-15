using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BPaaSDTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RestSharp;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MicrobeTraceNext.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenerateIDController : ControllerBase
    {

        private readonly ILogger<GenerateIDController> _logger;

        public GenerateIDController(ILogger<GenerateIDController> logger)
        {
            _logger = logger;
        }

        //public AddBlockController(IConfiguration iConfig)
        //{
        //    configuration = iConfig;
        //}

        [HttpPost]
        public async Task<GenerateIDResponse> PostAsync(GenerateIDRequest input)
        {
            GenerateIDResponse result = new GenerateIDResponse();
            //Guid guid = Guid.NewGuid();
            //result.success = true;
            //result.id = guid.ToString();

            string token = AppSettings.Settings.Token;
            string baseUrl = AppSettings.Settings.BaseUrl;

            try
            {
                var client = new RestClient(baseUrl);
                var request = new RestRequest("createblockname", Method.POST);
                //request.AddParameter("TenantID", AbpSession.TenantId, ParameterType.HttpHeader);
                request.AddParameter("TenantID", "0", ParameterType.HttpHeader);
                request.AddParameter("UserID", "0", ParameterType.HttpHeader);
                request.AddParameter("RequestingUserID", input.UserID, ParameterType.HttpHeader);
                request.AddParameter("LedgerName", input.LedgerName, ParameterType.HttpHeader);
                request.AddParameter("Jurisdiction", input.State, ParameterType.HttpHeader);
                request.AddParameter("BPAASToken", token, ParameterType.HttpHeader);


                IRestResponse response = await client.ExecuteAsync(request);


                if (response != null)
                {
                    var tempresult = JsonConvert.DeserializeObject<dynamic>(response.Content);

                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {

                        try
                        {
                            CreateBlockNameResponse temp = JsonConvert.DeserializeObject<CreateBlockNameResponse>(tempresult);
                            result.id = temp.BlockName;


                        }
                        catch (Exception ex)
                        {
                            result.message = "Fail to deserilaized the response";
                        }

                        result.success = true;
                        //result.message = tempresult.statusMessage;

                    }
                    else
                    {

                        result.success = false;
                        result.message = tempresult.ToString();

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
        }
}
