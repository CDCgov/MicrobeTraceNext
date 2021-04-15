using System;
namespace BPaaSDTO
{
    public class BpaasPayload
    {
        public dynamic BpaaSPayload { get; set; }

        public BpaasPayload(dynamic payload)
        {

            this.BpaaSPayload = payload;
        }
    }
}
