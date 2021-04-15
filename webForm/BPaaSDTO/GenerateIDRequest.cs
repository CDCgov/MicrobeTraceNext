using System;
namespace BPaaSDTO
{
    public class GenerateIDRequest
    {
        public string TenantID { get; set; }
        public string UserID { get; set; }
        public string UpdatedByUserId { get; set; }
        public string LedgerName { get; set; }
        public string State { get; set; }
        public GenerateIDRequest()
        {
        }
    }
}
