import React from "react";
import DocsAPI from "../../CommonComponent/DocsAPI";
import { Button } from "../../CommonComponent/Button";

const VoiceApi = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-gray-200 mt-6">
      <div className="space-y-10">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight text-center">
          Voice API Documentation
        </h1>
        <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
          Sending Voice call using Authkey APIs is super easy. You can simply
          pass the voice message in text format, mobile number, countrycode &
          authkey in the API request to send call instantly.
        </p>

        <DocsAPI
          title="Example Usage:"
          apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&voice=Hello, your OTP is 1234"
        />

        {/* Parallel Usage Section */}
        <div className="space-y-4">
          <DocsAPI
            title="Parallel Usage"
            apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&sms=Hello, your OTP is 1234&sender=SENDERID&voice=Hello, your otp is 1234"
            description="If you wish to send both voice call and sms message to the recepientmobile, you can do that using below API:"
          />
          <div className="text-red-600 text-sm italic">
            *To send sms, you need to pass <b>sender</b> parameter in the API
            request.
          </div>
        </div>

        {/* Fallback Usage Section */}
        <div className="space-y-4">
          <DocsAPI
            title="Use Fallback"
            apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&voice=Hello, your OTP is 1234&sender=SENDERID&fb1sms=Hello, your otp is 1234"
            description="If you wish to trigger fallback through sms, if voice call fails, you can do that by using below API:"
          />
          <div className="text-red-600 text-sm italic">
            *Note: If message content is Unicode, kindly add parameter
            <span className="font-semibold"> &is_unicode=1</span>.
          </div>
        </div>

        {/* Email Templates */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Voice Templates:
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            You can also create templates in the authkey portal and use the
            template id in the API request. Templates are necessary when you
            need dynamic contents in your message text. For example, to send an
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
            <br />
            <br />
            Example usage for above template, assuming template id generated is
            1001
          </p>
          <DocsAPI apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&country_code=CountryCode&vid=1001&name=Twinkle&otp=1234" />
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            Here, <b>#name#</b> and <b>#otp#</b> parameters are auto-added to
            the API and their values shall be replaced in the template body ...
            <br />
            <br />
            You can also create SMS and Voice templates and use them in the
            above API for parallel or fallback usages.
          </p>
        </div>
        <DocsAPI
          title="Events:"
          apiCode="https://api.authkey.io/request?authkey=AUTHKEY&msisdn=RecepientMobile&country_code=COUNTRYCode&eid=EventId"
          description="Events are combinations of templates which you can create on the Authkey portal. Event definitions will include parallel sendings, fallback channels and setting up of requiredness of dynamic parameters in the chosen templates. Once created, you will have an event-id, which can be used to trigger the event using below API:"
        />
        <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
          Event APIs are generally shorter than all other APIs and can include
          parallel as well as fallback mechanisms on all the three channels.
          <br />
          <br />
          All the dynamic content of the templates in an event shall be added
          automatically as API parameters and can be used to replace the dynamic
          values.
          <br />
          <br />
          <div className="text-red-600 text-md italic mb-4">
            *Multiple templates with same dynamic values will be considered a
            single value.
          </div>
          While creating an event, you will get an option to choose which
          dynamic values are mandatory in the API request.
          <br />
          <br />
          For example if you have 3 templates, one each for sms, voice and email
          as below: SMS: Dear #name# , your otp is #otp#
          <br />
          <br />
          SMS: Dear <b>#name#</b>, your otp is <b>#otp#</b>
          <br />
          Voice: Thank you for showing interest, your otp is <b>#otp#</b>
        </p>
        <DocsAPI
          title="Voice:"
          apiCode="https://api.authkey.io/request?authkey=AUTHKEY&mobile=RecepientMobile&email=RecepientEmail&country_code=CountryCode&eid=EventId&name=Ashish&otp=1234&company=Datagen"
          description="If we create an event using above three templates, the dynamic values shall be: name, otp & company Corresponding API request shall be:"
        />
        <div className="flex items-center justify-center">
          <Button name="Getting Start" link="/Contact" />
        </div>
      </div>
    </div>
  );
};

export default VoiceApi;
