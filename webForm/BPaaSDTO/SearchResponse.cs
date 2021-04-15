using System;
using System.Collections.Generic;

namespace BPaaSDTO
{
    public class DownloadFilterBlockResponse
    {
        public bool success { get; set; }
        public string message { get; set; }
        public List<BlockData> searchResult { get; set; }
        public decimal MatchedPercentage { get; set; }
        public DownloadFilterBlockResponse()
        {
        }
    }

    public class BlockData
    {
        public string data { get; set; }
        public string blockID {get;set;}
        public string blockName { get; set; }

        public BlockData()
        {

        }
    }
}
