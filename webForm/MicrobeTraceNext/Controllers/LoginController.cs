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
    public class LoginController : ControllerBase
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<LoginResponse> PostAsync(LoginRequest input)
        {
            LoginResponse result = new LoginResponse();

            //result.firstName = "Chanita";
            //result.lastName = "Nuansri";
            //result.middleName = "P";
            //result.blockChainHashCode = "";
            //result.jurisdiction = "TX";
            //result.reportingHealthDepartment = "Fort Bend";
            //result.phone = "2818320332";
            //result.organization = "FirstGenesis, Inc.";
            //result.email = "nuansric2@icloud.com";
            //result.tenantID = "1";
            //result.userID = "53";
            //result.success = true;

            //return result;







            string token = AppSettings.Settings.Token;
            string baseUrl = AppSettings.Settings.BaseUrl;

            try
            {

                var client = new RestClient(baseUrl);
                var request = new RestRequest("loginbpaasuser", Method.POST);
                request.AddParameter("TenantName", input.TenantName, ParameterType.HttpHeader);
                request.AddParameter("LedgerName", input.LedgerName, ParameterType.HttpHeader);
                request.AddParameter("Email", input.Email, ParameterType.HttpHeader);
                request.AddParameter("Password", input.Password, ParameterType.HttpHeader);

                request.AddParameter("BPAASToken", token, ParameterType.HttpHeader);

                IRestResponse response = await client.ExecuteAsync(request);


                if (response != null && response.Content != null)
                {
                    var tempresult = JsonConvert.DeserializeObject<dynamic>(response.Content);

                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {

                        try
                        {
                            result = JsonConvert.DeserializeObject<LoginResponse>(tempresult);
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
                            LoginResponse temp = JsonConvert.DeserializeObject<LoginResponse>(tempresult);


                            result.message = temp.statusMessage;

                        }
                        catch (Exception ex)
                        {

                            result.message = tempresult.ToString();

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
    }
}