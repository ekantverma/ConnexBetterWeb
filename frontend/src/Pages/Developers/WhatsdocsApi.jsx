import DocsAPI from "../../CommonComponent/DocsAPI";
import { Button } from "../../CommonComponent/Button";

const WhatsdocsApi = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-gray-200 mt-6">
      <div className="space-y-10">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight text-center">
          WhatsApp API Documentation
        </h1>
        <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
          Sending WhatsApp using ConnexBetter.io APIs is a breeze and lightning fast.
          Simply pass the message body, mobile number & ConnexBetter.io in the API
          request to send WhatsApp Message instantly.
        </p>
        {/* Email Templates */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            WhatsApp Templates:
          </h2>
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            You can also create templates in the ConnexBetter.io portal and use the
            template ID (wid) in the API request. Templates are necessary in
            case of dynamic content present in the message. For example, in
            order to send an OTP message, you can create a template as below:
            <br />
            <br />
            <span className="font-semibold">
              Dear #name#, your #otp# is otp
            </span>
            <br />
            ConnexBatter automatically adds the dynamic values of the Template
            as API Parameters which can be used to change the content delivered
            to each recipient.
            <br />
            <br />
            Example usage for above template, assuming WhatsApp Template id
            (wid) generated as 101 is as follows:
          </p>
          <DocsAPI apiCode="https://console.connexbetter.com/request? ConnexBetter=ConnexBetter.io&mobile=RecepientMobile&country_code=CountryCode&wid=101&name=Twinkle&otp=1234" />
          <p className="text-lg text-gray-700 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 leading-relaxed">
            Here, #name# and #otp# parameters are auto-added to the API and
            their values shall be replaced in the template body ...
          </p>
        </div>
        <DocsAPI
          title="ConnexBetter Balance:"
          apiCode="https://console.connexbetter.com/restapi/getbalance.php?ConnexBetter=ConnexBetter"
          description="To fetch your ConnexBetter balance just pass your {#ConnexBetter#} as parameter, You can find {#ConnexBetter#} into your My Account > Profile"
        />

        <div className="font-bold text-lg">
          GET API To Send Media Document/Image/Video Template with variable
        </div>

        <DocsAPI
          title="API using GET Request [Multimedia]:"
          apiCode="https://console.connexbetter.com/restapi/request.php? ConnexBetter=XXXXXX&mobile=XXXXXXXXXX&country_code=91&wid=templateid&template_type=media&headerFileName=BillDetails&HeaderData=https://abc.pdf"
        ></DocsAPI>

        <DocsAPI
          title="API using POST Request:"
          apiCode="https://console.connexbetter.com/restapi/requestjson.php"
        ></DocsAPI>

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
                    Basic &lt;Your Api_Key&gt; = Your ConnexBetter portal ConnexBetter
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Content-Type</td>
                  <td className="px-6 py-4 text-gray-600">application/json</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <DocsAPI
            title="Body"
            apiCode={`{
    "country_code": "91",
    "mobile": "xxxxxxxxxx",
    "wid": "xxxx",
    type: "text",
    "bodyValues": {"var1":"xxxx","var2":"xxxx"},
    "headerValues": {
      "headerFileName": "xyz",
      "headerData":  "https://abc.pdf"
    }
  }`}
          />
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-md leading-relaxed font-semibold text-gray-800 whitespace-pre-wrap">
          <strong>WhatsApp API Parameters:</strong>
          <br />
          <br />
          &lt;Your ConnexBetter&gt; = Your portal ConnexBetter
          <br />
          country_code = xx
          <br />
          mobile = Mobile Number
          <br />
          wid = WhatsApp Template ID
          <br />
          type = text / media
          <br />
          bodyValues = pass the variables as {"{"}"var1":"value"{"}"}
          <br />
          headerFileName = Header Name
          <br />
          headerData = file full URL
        </div>

        <div className="flex items-center justify-center">
          <Button name="Getting Started" link="/Contact" />
        </div>
      </div>
    </div>
  );
};

export default WhatsdocsApi;
