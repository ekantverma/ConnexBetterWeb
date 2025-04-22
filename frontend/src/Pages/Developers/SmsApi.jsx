import React, { useState } from "react";
import DocsAPI from "../../CommonComponent/DocsAPI";

const SmsApi = () => {
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
          <DocsAPI
            title="SMS API with Message Template"
            apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&pe_id=ENTITY_ID&template_id=DLT_TEMPLATE_ID"
          />

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
            OTP message, you can create a template as below: <br></br> <br></br>
            Dear <span className="font-semibold">#name#</span> , your
            <span className="font-semibold"> #otp#</span> is otp. Authkey
            automatically adds your template dynamic values as API parameters
            and you can use them to change the content delivered to each
            recipient. <br></br> <br></br>Example usage for above template,
            assuming template id generated is 1001.
          </p>
        </div>

        {/* Additional API Example */}
        <div className="space-y-4">
          <DocsAPI
            title="SMS API with SID"
            apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sid=1001&name=Twinkle&otp=1234"
            description="Here, 'name' and 'otp' parameters are auto-added to the API and their values shall be replaced in the template body {...}
                        You can also create Voice and Email templates and use them in the above API for parallel or fallback usages."
          />
        </div>

        <div className="space-y-4">
          <DocsAPI
            title="Parallel Usage:"
            apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&voice=Hello, your otp is 1234"
            description="If you wish to send both voice call and sms message to the recepientmobile, you can do that using below API:"
          />

          <div className="text-red-600">
          *Note : If message content is Unicode kindly add parameter &is_unicode=1
          </div>
        </div>

        <div className="space-y-4">
          <DocsAPI
            title="Use Fallback:"
            apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&fb1voice=Hello, your otp is 1234"
            description="If you wish to trigger fallback only if sms delivery fails, you can do that by using below API:"
          />

          <div className="text-red-600">
          *Note : If message content is Unicode kindly add parameter &is_unicode=1
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsApi;
