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
    public class RegistrationController : ControllerBase
    {
        private readonly ILogger<RegistrationController> _logger;


        public RegistrationController(ILogger<RegistrationController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<RegistrationResponse> PostAsync(RegistrationRequest input)
        {
            RegistrationResponse result = new RegistrationResponse();

            string token = AppSettings.Settings.Token;
            string baseUrl = AppSettings.Settings.BaseUrl;

            try
            {

                var client = new RestClient(baseUrl);
                var request = new RestRequest("registerbpaasuser", Method.POST);
         
         
                request.AddParameter("Email", input.Email, ParameterType.HttpHeader);
                request.AddParameter("UserName", input.Email, ParameterType.HttpHeader);
                request.AddParameter("Password", input.Password, ParameterType.HttpHeader);
                request.AddParameter("FirstName", input.FirstName, ParameterType.HttpHeader);
                request.AddParameter("LastName", input.LastName, ParameterType.HttpHeader);
                request.AddParameter("TenantName", input.Organization, ParameterType.HttpHeader);
                request.AddParameter("Jurisdiction", input.Jurisdiction, ParameterType.HttpHeader);
                request.AddParameter("Phone", input.Phone, ParameterType.HttpHeader);
                request.AddParameter("BPAASToken", token, ParameterType.HttpHeader);
                request.AddParameter("ReportingHealthDepartment", input.ReportingHealthDepartment, ParameterType.HttpHeader);
                request.AddParameter("MiddleName", input.MiddleName, ParameterType.HttpHeader);


                //request.AddParameter("SubJurisdiction", input.SubJurisdiction, ParameterType.HttpHeader);
                IRestResponse response = await client.ExecuteAsync(request);


                if (response != null)
                {
                    var tempresult = JsonConvert.DeserializeObject<dynamic>(response.Content);

                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {

                        try
                        {
                            result = JsonConvert.DeserializeObject<RegistrationResponse>(tempresult);
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
                            RegistrationResponse temp = JsonConvert.DeserializeObject<RegistrationResponse>(tempresult);


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