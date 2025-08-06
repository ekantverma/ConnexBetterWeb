import React, { useState } from "react";
import productowner from "../assets/HomeImage/IMAGE/productownerimg.png";
import marketer from "../assets/HomeImage/IMAGE/marketersimg.png";
import salesimg from "../assets/HomeImage/IMAGE/salesimg.png";

// Role tabs
const roles = ["Developer", "Product owners", "Marketers", "Support and sales"];
const languages = ["Java", "Python", "PHP", "HTTP"];

// Code samples only for Developer
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

// Role-based content
const roleContent = {
  Developer: {
    title: "Start Integrating SMS, WhatsApp & Voice in Minutes!",
    description:
      "Get started with ConnexBetter’s lightweight APIs to power your OTPs, marketing campaigns, and customer engagement. Seamless integration, blazing-fast delivery.",
    button1: "View docs",
    button2: "Try Live API",
  },
  "Product owners": {
    title: "Empower your product with fast, scalable communication.",
    description:
      "Build seamless customer experiences using Connex Better’s ready-to-integrate APIs for SMS, WhatsApp, Voice, and RCS.",
    button1: "Explore API Solutions",
    button2: "Start for Free",
  },
  Marketers: {
    title: "Power up your marketing with precision messaging.",
    description:
      "Engage customers with personalized SMS, WhatsApp, and voice campaigns — powered by real-time data.",
    button1: "See marketing solutions",
    button2: "Start for Free",
  },
  "Support and sales": {
    title: "Conversations that convert. Support that scales.",
    description:
      "Deliver instant, personalized responses across SMS, WhatsApp, and Voice to close deals faster and resolve issues smarter — all from one platform.",
    button1: "See support solutions",
    button2: "Start for Free",
  },
};

const DeveloperApis = () => {
  const [activeRole, setActiveRole] = useState("Developer");
  const [activeLang, setActiveLang] = useState("Java");

  const isDeveloper = activeRole === "Developer";
  const { title, description, button1, button2 } = roleContent[activeRole];

  return (
    <div className="w-full bg-[#3b0a84] text-white py-10 px-4 sm:px-10 lg:px-20 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
            Builder is a mindset, not a job title
          </h1>

          {/* Role Tabs */}
          {/* <div className="flex justify-center">
            <div className="relative flex gap-12 text-[18px] font-medium text-white/80 pb-4 border-b-4 border-white px-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className={`relative pb-2 cursor-pointer transition-colors duration-300 ${
                    activeRole === role ? "text-white" : "hover:text-white"
                  }`}
                  onClick={() => setActiveRole(role)}
                >
                  {role}
                </span>
              ))}

              {/* Cyan slider underline inside white border */}
              {/* <div
                className="absolute bottom-[-4px] h-[4px] bg-cyan-400 transition-all duration-300 rounded-xl"
                style={{
                  width: `calc(${100 / roles.length})`,
                  left: `calc(${
                    roles.indexOf(activeRole) * (100 / roles.length)
                  } % - 2px)`,
                }}
              />
            </div>
          </div>  */}
          <div className="flex justify-center gap-12 text-[18px] font-medium text-white/80 flex-wrap">
            {roles.map((role) => (
              <span
                key={role}
                className={`relative pb-2 cursor-pointer transition-colors duration-300 ${
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
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-semibold">{title}</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl">
              {description}
            </p>

            <div className="flex gap-4 pt-2 flex-wrap">
              <button className="bg-[#5956D6] hover:bg-[#7384f1] text-white font-medium px-6 py-2 rounded-md">
                {button1}
              </button>
              <button className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-white hover:text-[#3b0a84] transition">
                {button2}
              </button>
            </div>
          </div>

          {/* Right Section: Code or Image */}
          {isDeveloper ? (
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
              {/* Code */}
              <pre className="p-4 text-green-300 font-mono whitespace-pre-wrap">
                {codeSamples[activeLang]}
              </pre>
            </div>
          ) : (
            <div className="w-full max-w-md mx-auto">
              <img
                key={activeRole}
                src={
                  activeRole === "Product owners"
                    ? productowner
                    : activeRole === "Marketers"
                    ? marketer
                    : salesimg
                }
                alt="Role visual"
                className="rounded-xl w-[450px] h-[350px] object-contain transition-opacity duration-500 ease-in-out animate-fade-in"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperApis;
