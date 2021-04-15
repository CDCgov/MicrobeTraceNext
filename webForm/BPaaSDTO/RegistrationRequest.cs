using System;
namespace BPaaSDTO
{
    public class RegistrationRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Organization { get; set; }
        public string Jurisdiction { get; set; }
        public string Phone { get; set; }
        public string TenantName { get; set; }
        public string MiddleName { get; set; }
        public string ReportingHealthDepartment { get; set; }
        public string SubJurisdiction { get; set; }

        public RegistrationRequest()
        {
        }
    }
}
