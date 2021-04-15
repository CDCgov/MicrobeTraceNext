using System;
namespace BPaaSDTO
{
    public class AddBlockResponse
    {
        public string tenantID { get; set; }
        public string userID { get; set; }
        public string ledgerName { get; set; }
        public string blockName { get; set; }
        public string blockProofHash { get; set; }
        public string statusMessage { get; set; }
        public bool success { get; set; }
        public string message {get;set;}
    }
}
