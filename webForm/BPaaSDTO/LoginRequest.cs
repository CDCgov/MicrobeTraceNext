using System;
namespace BPaaSDTO
{
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string LedgerName { get; set; }
        public string TenantName { get; set; }
        public LoginRequest()
        {
        }
    }
}
