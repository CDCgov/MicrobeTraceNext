using System;
using Microsoft.Extensions.Configuration;

namespace MicrobeTraceNext.Controllers
{
    public class AppSettings
    {

        public static Settings Settings { get; set; }
       

        public AppSettings(IConfiguration configuration)
        {

            Settings = new Settings
            {
                BaseUrl = configuration.GetValue<string>("MicrobeTraceConfig:BPassUrl"),
                Token = configuration.GetValue<string>("MicrobeTraceConfig:BPaasLedgerToken")
            };
        }
    }

    public class Settings
    {
        public string Token { get; set; }

        public string BaseUrl { get; set; }
    }
}
