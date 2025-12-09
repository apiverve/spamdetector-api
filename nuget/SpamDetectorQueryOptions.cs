using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SpamDetector
{
    /// <summary>
    /// Query options for the Spam Detector API
    /// </summary>
    public class SpamDetectorQueryOptions
    {
        /// <summary>
        /// The text to detect spam in
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The email address to validate against the spam database. This is optional
        /// </summary>
        [JsonProperty("email")]
        public string Email { get; set; }

        /// <summary>
        /// The IP address to validate against the spam database.  This is optional
        /// </summary>
        [JsonProperty("ip")]
        public string Ip { get; set; }
    }
}
