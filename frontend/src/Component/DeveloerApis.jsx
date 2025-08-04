import React, { useState } from "react";

const roles = ["Developer", "Product owners", "Marketers", "Support and sales"];
const languages = ["Java", "Python", "PHP", "HTTP"];

// Code samples for each language
const codeSamples = {
  Java: `OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.interagt.net/grac/whatsapp.templates/message/x7")
  .post(
    .addHeader("Content-Type", "application/json")
    .addHeader("Accept", "application/json")
  )
  .build();

Response response = client.newCall(request).execute();`,

  Python: `import requests

url = "https://api.interagt.net/grac/whatsapp.templates/message/x7"
headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
}
response = requests.post(url, headers=headers)
print(response.text)`,

  PHP: `<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.interagt.net/grac/whatsapp.templates/message/x7",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json",
    "Accept: application/json"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>`,

  HTTP: `POST /grac/whatsapp.templates/message/x7 HTTP/1.1
Host: api.interagt.net
Content-Type: application/json
Accept: application/json`,
};

const DeveloperApis = () => {
  const [activeRole, setActiveRole] = useState("Developer");
  const [activeLang, setActiveLang] = useState("Java");

  return (
    <div className="w-full bg-[#3b0a84] text-white py-20 px-4 sm:px-10 lg:px-20 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Builder is a mindset, not a job title
          </h1>

          {/* Role Tabs */}
          <div className="flex gap-8 text-lg font-medium text-white/80 relative flex-wrap">
            {roles.map((role) => (
              <span
                key={role}
                className={`cursor-pointer pb-1 ${
                  activeRole === role
                    ? "text-white border-b-2 border-cyan-400"
                    : "hover:text-white"
                }`}
                onClick={() => setActiveRole(role)}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Role Description */}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-6">
            Start Integrating SMS, WhatsApp <br /> & Voice in Minutes!
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-lg">
            Get started with ConnexBetter’s lightweight APIs to power your OTPs,
            marketing campaigns, and customer engagement. Seamless integration,
            blazing-fast delivery.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2 flex-wrap">
            <button className="bg-[#6572d4] hover:bg-[#7384f1] text-white font-medium px-6 py-2 rounded-md">
              View docs
            </button>
            <button className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-white hover:text-[#3b0a84] transition">
              Try Live API
            </button>
          </div>
        </div>

        {/* Right Section: Code Block */}
        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden w-full max-w-md mx-auto shadow-xl text-sm">
          {/* Language Tabs */}
          <div className="flex bg-[#2a2a2a] text-white text-xs font-medium px-4 py-2 space-x-4">
            {languages.map((lang) => (
              <div
                key={lang}
                className={`px-2 py-1 rounded cursor-pointer ${
                  activeLang === lang
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveLang(lang)}
              >
                {lang}
              </div>
            ))}
          </div>

          {/* Code Display */}
          <pre className="p-4 text-green-300 font-mono whitespace-pre-wrap">
            {codeSamples[activeLang]}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DeveloperApis;

