import React, { useState } from "react";

const SmsApi = () => {
  const [copied, setCopied] = useState(false);

  const apiCode = `https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&pe_id=ENTITY_ID&template_id=DLT_TEMPLATE_ID`;

  const handleCopy = () => {
    navigator.clipboard.writeText(apiCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-200 mt-6">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-blue-600 tracking-tight">
          SMS API Documentation
        </h1>

        {/* Base URL Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Base URL</h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            Authkey.io's GET APIs are exclusively served over
            <span className="font-semibold text-blue-600"> HTTPS</span>. This
            ensures that all data transmitted between your application and
            Authkey.io's servers is encrypted and protected.
          </p>
        </div>

        {/* Sample API Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sample API Code
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            Sending SMS using Authkey APIs is a breeze and lightning fast. You
            can simply pass the
            <span className="font-semibold"> message body</span>,
            <span className="font-semibold"> sender</span> ,
            <span className="font-semibold"> mobile number</span> &
            <span className="font-semibold"> authkey</span> in the API request
            to send SMS instantly.
          </p>
        </div>

        {/* For India Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            For Sending SMS in India
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            For Users in India,
            <span className="font-semibold"> due to DLT rules</span>, you can
            set up your Principle
            <span className="font-semibold">
              {" "}
              Entity ID & DLT Template ID
            </span>{" "}
            in the Authkey portal by uploading a DLT template CSV file or
            entering the DLT details manually in the DLT Setup menu.
            Alternatively, you can skip the DLT setup and directly pass the
            entity & template IDs in the API request itself.
          </p>
        </div>

        {/* Code Block with Copy Button */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            SMS API with Message Template
          </h2>
          <div className="bg-gray-900 text-white rounded-lg shadow-md">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-t-lg">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <div className="relative p-4 font-mono text-sm">
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 bg-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-600"
              >
                {copied ? "✔ Copied" : "📋 Copy"}
              </button>

              <pre className="bg-gray-800 text-green-400 p-4 rounded-md whitespace-pre-wrap overflow-auto">
                {apiCode}
              </pre>
            </div>
          </div>
          <div className="text-red-600">
            *Note : If message content is Unicode kindly add parameter
            &is_unicode=1
          </div>
        </div>

        {/* SMS Templates Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            SMS Templates:
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            You can also create templates in the authkey portal and use the
            template id in the API request. Templates are necessary when you
            need dynamic contents in your message text. For example, to send an
            OTP message, you can create a template as below: <br></br> <br></br>Dear <span className="font-semibold">#name#</span> , your
            <span className="font-semibold"> #otp#</span> is otp. Authkey automatically adds your template dynamic values
            as API parameters and you can use them to change the content
            delivered to each recipient. <br></br> <br></br>Example usage for above template,
            assuming template id generated is 1001.
          </p>
        </div>

        {/* Additional API Example */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Example SMS API with SID
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sid=1001&name=Twinkle&otp=1234
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Send SMS in Other Countries (International)
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            Example Usage for International SMS: <br></br> 
            https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Events API Example
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&eid=EventId&name=Ashish&otp=1234&company=Datagen
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmsApi;
