using System;
namespace BPaaSDTO
{
    public class AddBlockDto
    {
        public string TenantID { get; set; }
        public string UserID { get; set; }
        public string UpdatedByUserId { get; set; }
        public string LedgerName { get; set; }
        public bool IsFile { get; set; }
        public bool SaveTextAsFile { get; set; }
        public string BlockName { get; set; }
        public string BlockDescription { get; set; }
        public string BlockProofHash { get; set; }
        public string BlockchainProofHash { get; set; }
        public bool IsActive { get; set; }
        public string StatusMessage { get; set; }
        public DateTime DateTimeStamp { get; set; }
        public string Body { get; set; }
        public string FileExtension { get; set; }
        public bool IsSmartContract { get; set; }

    }
}
