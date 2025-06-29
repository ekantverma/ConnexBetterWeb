import React from "react";
import DocsAPI from "../../CommonComponent/DocsAPI";
import ApiCodesSnippetsOfAll from "../../CommonComponent/ApiCodesSnippetsOfAll";
import { Button } from "../../CommonComponent/Button";

const SmsApi = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-gray-200 mt-6">
      <div className="space-y-10">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight text-center">
          SMS API Documentation
        </h1>

        {/* Base URL Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Base URL</h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            ConnexBetter's GET APIs are exclusively served over
            <span className="font-semibold text-blue-600"> HTTPS</span>. This
            ensures that all data transmitted between your application and
            ConnexBetter's servers is encrypted and protected.
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
            <span className="font-semibold"> sender</span>,
            <span className="font-semibold"> mobile number</span>, and
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
            apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&pe_id=ENTITY_ID&template_id=DLT_TEMPLATE_ID"
          />
          <div className="text-red-600 text-sm italic">
            *Note: If message content is Unicode, kindly add parameter
            <span className="font-semibold"> &is_unicode=1</span>.
          </div>
        </div>

        {/* SMS Templates Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            SMS Templates
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            You can also create templates in the Authkey portal and use the
            template ID in the API request. Templates are necessary when you
            need dynamic content in your message text. For example, to send an
            OTP message, you can create a template as below:
            <br />
            <br />
            <span className="font-semibold">
              Dear #name#, your #otp# is otp.
            </span>
            <br />
            <br />
            Authkey automatically adds your template dynamic values as API
            parameters, and you can use them to change the content delivered to
            each recipient.
          </p>
        </div>

        {/* Additional API Example */}
        <div className="space-y-4">
          <DocsAPI
            title="SMS API with SID"
            apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sid=1001&name=Twinkle&otp=1234"
            description="Here, 'name' and 'otp' parameters are auto-added to the API and their values shall be replaced in the template body. You can also create Voice and Email templates and use them in the above API for parallel or fallback usages."
          />
        </div>

        {/* Parallel Usage Section */}
        <div className="space-y-4">
          <DocsAPI
            title="Parallel Usage"
            apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&voice=Hello, your otp is 1234"
            description="If you wish to send both voice call and SMS message to the recipient mobile, you can do that using the below API:"
          />
          <div className="text-red-600 text-sm italic">
            *Note: If message content is Unicode, kindly add parameter
            <span className="font-semibold"> &is_unicode=1</span>.
          </div>
        </div>

        {/* Fallback Usage Section */}
        <div className="space-y-4">
          <DocsAPI
            title="Use Fallback"
            apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&fb1voice=Hello, your otp is 1234"
            description="If you wish to trigger fallback only if SMS delivery fails, you can do that by using the below API:"
          />
          <div className="text-red-600 text-sm italic">
            *Note: If message content is Unicode, kindly add parameter
            <span className="font-semibold"> &is_unicode=1</span>.
          </div>
        </div>

        {/* Send SMS in other country */}
        <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-gray-200 mt-6">
          <div className="space-y-10">
            {/* Send SMS in other country */}
            <div className="space-y-4">
              <DocsAPI
                title="Send SMS in Other Country (International):"
                apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID"
              />
            </div>

            {/* Events Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Events</h2>
              <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
                Events are combinations of templates which you can create on the
                Authkey portal. Event definitions can include parallel sendings,
                fallback channels, and setup for required dynamic parameters in
                templates. Once created, you'll get an
                <span className="font-semibold"> event-id</span>, which can be
                used like below:
              </p>
              <DocsAPI
                title="Event API"
                apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&eid=EventId"
                description="Event APIs are shorter and can include fallback and parallel mechanisms on all three channels — SMS, Voice, and Email."
              />
              <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
                All dynamic content of templates in an event shall be added
                automatically as API parameters. Multiple templates with the
                same dynamic values are considered a single value.
                <br />
                <br />
                For example, if you create an event with the following
                templates:
                <br />
                <br />
                <span className="font-semibold">SMS:</span> Dear
                &#123;#name#&#125;, your otp is &#123;#otp#&#125;
                <br />
                <span className="font-semibold">Voice:</span> Thank you for
                showing interest, your otp is &#123;#otp#&#125;
                <br />
                <span className="font-semibold">Email:</span>
                <br />
                Subject: OTP from &#123;#company#&#125;
                <br />
                Body: Dear &#123;#name#&#125;, Thanks for choosing us. Your OTP
                is &#123;#otp#&#125;.
                <br />
                <br />
                The required dynamic values will be:{" "}
                <span className="font-semibold">name, otp, company</span>
              </p>
              <DocsAPI
                title="API Request with Dynamic Values"
                apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&email=RecepientEmail&country_code=CountryCode&eid=EventId&name=Ashish&otp=1234&company=Datagen"
              />
            </div>
          </div>
        </div>
        {/* Query Parameters Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Query Params</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-md font-semibold text-gray-700">
                    Param
                  </th>
                  <th className="px-6 py-3 text-left text-md font-semibold text-gray-700">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-800">authkey</td>
                  <td className="px-6 py-4 text-gray-600">AUTHKEY</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">mobile</td>
                  <td className="px-6 py-4 text-gray-600">RecepientMobile</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">country_code</td>
                  <td className="px-6 py-4 text-gray-600">CountryCode</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">sms</td>
                  <td className="px-6 py-4 text-gray-600">
                    Hello, your OTP is 1234
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">sender</td>
                  <td className="px-6 py-4 text-gray-600">SENDERID</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">pe_id</td>
                  <td className="px-6 py-4 text-gray-600">ENTITY_ID</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">template_id</td>
                  <td className="px-6 py-4 text-gray-600">DLT_TEMPLATE_ID</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {/* Other page content */}
          <ApiCodesSnippetsOfAll name="Post SMS API: " desc="Sample Code" />
        </div>
        {/*POST sendSMS-SID*/}
        <div className="space-y-4">
          <DocsAPI
            title="POST sendSMS-SID"
            apiCode="https://console.authkey.io/restapi/requestjson.php"
            description="send sms using sms template id created on authkey"
          />
        </div>
        {/* Request Headers */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Request Headers
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-md font-semibold text-gray-700">
                    Content-Type
                  </th>
                  <th className="px-6 py-3 text-left text-md font-semibold text-gray-700">
                    application/json
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-800">Authorization</td>
                  <td className="px-6 py-4 text-gray-600">
                    Basic &lt;Api_Key&gt; = Your authkey portal authkey
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*Body Raw*/}
        <div className="space-y-4">
          <DocsAPI
            title="Body raw"
            apiCode={`{
    "country_code": "91",
    "mobile": "xxxxx",
    "sid": "**"
  }`}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button name="Getting Start" link="/Contact" />
        </div>
      </div>
    </div>
  );
};

export default SmsApi;
