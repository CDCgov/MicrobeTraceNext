using System;
using System.Collections.Generic;

namespace BPaaSDTO
{
    public class LoginResponse
    {
        public bool success { get; set; }
        public string message { get; set; }
        public string statusMessage { get; set; }
        public string email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string blockChainHashCode { get; set; }
        public string organization { get; set; }
        public string jurisdiction { get; set; }
        public string phone { get; set; }
        public string userID { get; set; }
        public string tenantID { get; set; }
        public List<string> UserRoles { get; set; }
        public string middleName { get; set; }
        public string reportingHealthDepartment { get; set; }
        public string subJurisdiction { get; set; }
        public LoginResponse()
        {
        }
    }
}
