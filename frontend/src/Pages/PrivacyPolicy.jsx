import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section>
    
        <div className="p-6  text-gray-800 container">
      <div className=" mx-auto  bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">How We Use the Information We Collect</h2>
          <p className="mb-4">
            Connex Better will share your personal information only in the manner described in this Privacy Policy. Connex Better may use the information collected on the Site to contact you in order to further discuss your interest in our company, our services, and to share information with you regarding our company, such as marketing promotions and events. This information may also be used to improve the services we provide you.
          </p>
          <p className="mb-4">
            The information is collected and stored in a manner that is appropriate for the nature of the data that we collect and will not be shared with third parties, unless specifically authorized by you. However, we may need to disclose your personal information to our legal advisers, in order to protect our rights and to preserve the safety of our users, when required to do so by law, or in order to comply with a current judicial proceeding, a court order, or legal process served on the Site.
          </p>
          <p>
            When sharing your personal information we will take all reasonable and appropriate measures to protect your information in accordance with this Privacy Policy, Connex Better’s internal policies and procedures, and applicable legal requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p>
            We employ appropriate technical and organizational security measures at all times to protect the information we collect from you. We use multiple electronic, procedural, and physical security measures to protect against unauthorized or unlawful use or alteration of information, and against any accidental loss, destruction, or damage to information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Changes and Updates</h2>
          <p>
            This Privacy Policy may be revised from time to time as Connex Better adds or changes features, services, or products, or as applicable laws change, and/or as industry-standard privacy and security practices evolve. The effective date is displayed at the bottom of each page of this Privacy Policy so that you can determine if there has been a change since you last used the Site. If Connex Better makes a material change to this Privacy Policy regarding the use or disclosure of certain information, Connex Better will provide a notice on the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Opt-Out Policy</h2>
          <p>
            If you no longer wish to receive communication from Connex Better for notification and promotional purposes, please uncheck the box below. By opting out, you will no longer receive any future communication from Connex Better through SMS and other channels.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Opt-In Policy</h2>
          <p className="mb-4">
            By checking the box below, I voluntarily agree to receive communication from Connex Better for notification and promotional purposes. I understand that these communications may be sent to me through SMS and other channels. I acknowledge that providing my consent is optional and that I can withdraw it at any time.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Messages</li>
            <li>SMS Messages</li>
            <li>Promotional or Information Messages via mobile phones</li>
          </ul>
          <p>
            Therefore, one of the above key word(s)/phrases needs to be part of the opt-in form that users can select/unselect. In case none of the above phrases are included in the opt-in form, the same (above phrase) must be mentioned in the terms of services (ToS) and a link to the terms of services (ToS) may be provided in the opt-in form.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions, concerns, or suggestions regarding our Privacy Policy, we can be reached using the contact information on our Contact Us page or at <a href="mailto:connect@connexbetter.com" className="text-blue-500 underline">connect@connexbetter.com</a>.
          </p>
        </section>

        <footer className="text-sm text-gray-500 mt-6">
          {/* Effective Date: [Insert Date Here] */}
        </footer>
      </div>
    </div>
    </section>
    
  );
};

export default PrivacyPolicy;
