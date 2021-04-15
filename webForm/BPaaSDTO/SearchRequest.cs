using System;
using System.Collections.Generic;

namespace BPaaSDTO
{
    public class DownloadFilterBlock
    {
        public string TenantID { get; set; }
        public string UserID { get; set; }
        public string RequestingUserID { get; set; }
        public string LedgerName { get; set; }
        public string BlockProofHash { get; set; }
        public string BlockchainProofHash { get; set; }
        public List<Filters> BlockFilter { get; set; }
        public string PuiInfo { get; set; }

        public DownloadFilterBlock
            ()
        {
        }
    }

    public class Filters{

        public string Key { get; set; }
        public string Value { get; set; }

        public Filters()
        {

        }
    }

  
}
