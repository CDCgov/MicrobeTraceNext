using System;
namespace BPaaSDTO
{
    public class GenerateIDResponse
    {
        public bool success { get; set; }
        public string message { get; set; }
        public string id { get; set; }
        public GenerateIDResponse()
        {
        }
    }

    public class CreateBlockNameResponse
    {
        
      public string TenantID {get; set;}
      public string UserID {get; set;}
      public string LedgerName {get; set;}
      public string BlockName {get; set;}
      public string StatusMessage {get; set;}
      public string ResponseTime {get; set;}
      public string BPAASToken { get; set; }

    }
}
