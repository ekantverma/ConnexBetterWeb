import React, { useState } from 'react';
import Voice from '../../Pages/Voice/Voice';
import IVR from '../../Pages/Voice/IVR';
import ContactCenter from '../../Pages/Voice/ContactCenter';
import VoiceOBD from '../../Pages/Voice/VoiceOBD';
import CallPatch from '../../Pages/Voice/CallPatch';
function SMS() {
  const [activeSection, setActiveSection] = useState('Voice');

  const renderSection = () => {
    switch (activeSection) {
      case 'Voice':
        return <Voice />;
      case 'IVR':
        return <IVR />;
      case 'ContactCenter':
        return <ContactCenter />;
      case 'VoiceOBD':
        return <VoiceOBD />;
        case 'CallPatch':
        return <CallPatch />;
      default:
        return <Voice/>;
    }
  };

  return (
    <section className="">
      {/* Navigation Buttons */}
      <div className='container'>
      <div className="hidden md:flex justify-between items-center">
    <div>
      <button
          className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
            activeSection === 'Voice'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('Voice')}
        >
          Voice
        </button>
        </div>
        <div className='flex gap-5'>
        <button
          className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
            activeSection === 'IVR'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('IVR')}
        >
          IVR
        </button>
        <button
          className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
            activeSection === 'ContactCenter'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('ContactCenter')}
        >
          Contact Center Solution       
          </button>
          <button
          className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
            activeSection === 'VoiceOBD'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('VoiceOBD')}
        >
          Voice OBD       
          </button>

        <button
          className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
            activeSection === 'CallPatch'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('CallPatch')}
        >
          Call Masking
        </button>

        </div>
        
       </div>
      </div>
      {/* mobile view =============================================================================================== */}
      <div className='container  overflow-y-hidden overflow-x-scroll z-10 sticky top-10 md:hidden'>
      <div className='py-4 flex gap-5  items-center rounded-lg justify-center'>
      <button
          className={` text-base px-4 py-2 rounded-xl  transition-all duration-300 ${
            activeSection === 'Voice'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('Voice')}
        >
          Voice
        </button>
      
       
        <button
          className={`  text-base px-3 py-2   rounded-xl transition-all duration-300 ${
            activeSection === 'IVR'
              ? 'bg-blue-600 text-white shadow-xl scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('IVR')}
        >
         IVR
        </button>
        <button
          className={` text-base px-3 py-2  rounded-xl transition-all duration-300 ${
            activeSection === 'ContactCenter'
              ? 'bg-blue-600 text-white shadow-xl scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('ContactCenter')}
        >
         Contact Center Solution
        </button>
        <button
          className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
            activeSection === 'VoiceOBD'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('VoiceOBD')}
        >
          Voice OBD       
          </button>
        <button
          className={`text-base sm:text-xl  px-3 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'CallPatch'
              ? 'bg-blue-600 text-white shadow-xl scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('CallPatch')}
        >
          Call Patching
        </button>
        </div>
      </div>
      {/* Content Section */}
      <div >
      <main>{renderSection()}</main>
      </div>
      
 
      
    </section>
  );
}

export default SMS;
