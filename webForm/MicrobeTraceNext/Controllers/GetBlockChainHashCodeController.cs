using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RestSharp;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MicrobeTraceNext.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GetBlockChainHashCodeController : ControllerBase
    {

        private readonly ILogger<GetBlockChainHashCodeController> _logger;

        public GetBlockChainHashCodeController(ILogger<GetBlockChainHashCodeController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public async Task<string> GetAsync()
        {
            return await GetBlockchainHash();
        }

        public static async Task<string> GetBlockchainHash()
        {
            List<BlockchainProofHashDto> result = new List<BlockchainProofHashDto>();
            string token = AppSettings.Settings.Token;
            string baseUrl = AppSettings.Settings.BaseUrl;
            try
            {
                var client = new RestClient(baseUrl);
                var request = new RestRequest("getAllBlockchainsByTenantID", Method.POST);
                request.AddParameter("TenantID", "0");
                request.AddParameter("UserID", "0");

                request.AddParameter("BPAASToken", token, ParameterType.HttpHeader);
                IRestResponse response = await client.ExecuteAsync(request);



                var tempresult = JsonConvert.DeserializeObject<dynamic>(response.Content);
                result = JsonConvert.DeserializeObject<List<BlockchainProofHashDto>>(tempresult);

                string hash = result.FirstOrDefault(x => x.ledgerName == "ContactTrace").blockChainProofHashCode;


                return hash;


            }
            catch (Exception e)
            {
                Console.WriteLine("{ 0} Exception caught.", e);
            }
            return null;
        }
    }

    public class BlockchainProofHashDto
    {
        public string tenantID { get; set; }
        public string UserID { get; set; }
        public string ledgerName { get; set; }
        public string ledgerDescription { get; set; }
        public string blockChainProofHashCode { get; set; }
        public bool isLocked { get; set; }
        public bool isBlockchainOwner { get; set; }
        public String lastUpdated { get; set; }
        public DateTime lastUpdatedDate { get; set; }
        public string UserName { get; set; }
        public Blockdata[] blockdata { get; set; }
        public string Idx { get; set; }
        public string ResponseTime { get; set; }
        public long UpdatedByUserId { get; set; }
        public string UpdatedByUser { get; set; }
       // public BlockUpdates[] blockUpdates { get; set; }
    }

    public class Blockdata
    {
        public string tenantID { get; set; }
        public string userID { get; set; }
        public string blockName { get; set; }
        public string blockDescription { get; set; }
        public string blockProofHashCode { get; set; }
        public bool isFile { get; set; }
        public string blockUpdatedDate { get; set; }
        public DateTime updatedDate { get; set; }
        public string blockChainProofHashCode { get; set; }
        public string LedgerName { get; set; }
        public string ResponseTime { get; set; }
    }
}