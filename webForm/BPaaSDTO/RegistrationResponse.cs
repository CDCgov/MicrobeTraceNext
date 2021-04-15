using System;
namespace BPaaSDTO
{
    public class RegistrationResponse
    {
        public bool success { get; set; }
        public string message { get; set; }
        public string statusMessage { get; set; }

        public RegistrationResponse()
        {
        }
    }
}
