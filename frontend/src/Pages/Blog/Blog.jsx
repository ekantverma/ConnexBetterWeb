import React, { useState } from 'react';
import BulkSmsBlog from './BulkSmsBlog';
import SmsApiBlog from './SmsApiBlog';
import BulkEmailBlog from './BulkEmailBlog';

function SMS() {
  const [activeSection, setActiveSection] = useState('SMSAPIBLOG');

  const renderSection = () => {
    switch (activeSection) {
      case 'SMSAPIBLOG':
        return <SmsApiBlog />;
      case 'BULKSMSBLOG':
        return <BulkSmsBlog />;
      case 'BULKEMAILBLOG':
        return <BulkEmailBlog />;
      default:
        return <SmsApiBlog />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll
    });
  };

  return (
    <>
      <section>
        {/* Navigation Buttons */}
        <div className="mt-4 sticky top-20 z-30">
          <div className="hidden md:flex gap-10 justify-center items-center bg-blue-100 rounded-lg shadow-inner">
            <button
              className={`px-8 py-3 rounded-full text-base shadow-md font-bold transition-all duration-300 ${
                activeSection === 'SMSAPIBLOG'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800'
              } hover:scale-105`}
              onClick={() => {
                setActiveSection('SMSAPIBLOG');
                scrollToTop();
              }}
            >
              SMS API Integration
            </button>

            <button
              className={`px-8 py-3 rounded-full text-base shadow-md font-bold transition-all duration-300 ${
                activeSection === 'BULKSMSBLOG'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800'
              } hover:scale-105`}
              onClick={() => {
                setActiveSection('BULKSMSBLOG');
                scrollToTop();
              }}
            >
              Bulk WhatsApp Marketing
            </button>

            <button
              className={`px-8 py-3 rounded-full text-base shadow-md font-bold transition-all duration-300 ${
                activeSection === 'BULKEMAILBLOG'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800'
              } hover:scale-105`}
              onClick={() => {
                setActiveSection('BULKEMAILBLOG');
                scrollToTop();
              }}
            >
              Email Marketing
            </button>
          </div>
        </div>

        {/* Bottom Navigation for Mobile */}
        <div className="fixed bottom-6 w-screen mr-5 bg-blue-200  shadow-md md:hidden flex justify-around py-5 z-10  sm:text-sm">
          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === 'SMSAPIBLOG'
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setActiveSection('SMSAPIBLOG');
              scrollToTop();
            }}
          >
            <i className="fas fa-envelope text-2xl"></i>
            <p className="text-xl mt-1">SMS Blog</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === 'BULKSMSBLOG'
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setActiveSection('BULKSMSBLOG');
              scrollToTop();
            }}
          >
            <i className="fas fa-shield-alt text-2xl"></i>
            <p className="text-xl mt-1">WhatsApp Blog</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === 'BULKEMAILBLOG'
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setActiveSection('BULKEMAILBLOG');
              scrollToTop();
            }}
          >
            <i className="fas fa-globe text-2xl"></i>
            <p className="text-xl mt-1">Email Blog</p>
          </button>
        </div>

        {/* Main content */}
        <main>{renderSection()}</main>
      </section>
    </>
  );
}

export default SMS;
