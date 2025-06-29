import React from "react";
import DocsAPI from "../../CommonComponent/DocsAPI";
import { Button } from "../../CommonComponent/Button";

const EmailApi = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-gray-200 mt-6">
      <div className="space-y-10">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight text-center">
          Email API Documentation
        </h1>
        <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
          Send Email using Authkey APIs and be assured to reach the inbox of
          your recepient everytime.
        </p>
        {/* Email Templates */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Email Templates:
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            You can create email templates in the authkey portal and use the
            template id in the API request. Templates can hold dynamic values in
            the email body and email subject. For example, to send an OTP
            message, you can create a template as below:
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
          <DocsAPI apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&email=RecepientEmail&mid=1001&name=Twinkle&otp=1234" />
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            Here, #name# and #otp# parameters are auto-added to the API and
            their values shall be replaced in the template body ...
            <br />
            <br />
            You can also create SMS and Voice templates and use them in the
            above API for parallel or fallback usages.
          </p>
        </div>
        <DocsAPI
          title="Events:"
          apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&email=RecepientEmail&msisdn=RecepientMobile&country_code=CountryCode&eid=EventId"
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
          Voice: Thank you for showing interest, your otp is #otp#
        </p>
        <DocsAPI
          title="Email:"
          apiCode="https://api.connexbetter.com/request?authkey=AUTHKEY&mobile=RecepientMobile&email=RecepientEmail&country_code=CountryCode&eid=EventId&name=Ashish&otp=1234&company=Datagen"
          description="If we create an event using above three templates, the dynamic values shall be: name, otp & company Corresponding API request shall be:"
        />
        <div className="flex items-center justify-center">
          <Button name="Getting Start" link="/Contact" />
        </div>
      </div>
    </div>
  );
};

export default EmailApi;
