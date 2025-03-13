import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Multilevelnav from "./Component/Multilevelnav";
import { Footer } from "./Component/Footer";
import ScrollToTop from "./ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const About = lazy(() => import("./Pages/About/About.jsx"));
const SMSPricing = lazy(() => import("./Pages/Pricing/SMSPricing.jsx"));
const WhatsAppPricing = lazy(() => import("./Pages/Pricing/WhatsAppPricing.jsx"));
const RCSPricing = lazy(() => import("./Pages/Pricing/RCSPricing.jsx"));
const EmailPricing = lazy(() => import("./Pages/Pricing/EmailPricing.jsx"));
const VoicePricing = lazy(() => import("./Pages/Pricing/VoicePricing.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const ScheduleDemo = lazy(() => import("./Pages/ScheduleDemo.jsx"));
const Career = lazy(() => import("./Pages/Career.jsx"));
const Error = lazy(() => import("./Pages/Error.jsx"));
const RCS = lazy(() => import("./Pages/RCS/RCS.jsx"));
const SMS = lazy(() => import("./Pages/SMS/SMS.jsx"));
const SMSAPI = lazy(() => import("./Pages/SMS/SMSAPI.jsx"));
const BulkSMS = lazy(() => import("./Pages/SMS/BulkSMS.jsx"));
const InternationalSMS = lazy(() => import("./Pages/SMS/InternationalSMS.jsx"));
const TwoFactorAuthentication = lazy(() => import("./Pages/SMS/TwoFactorAuthentication.jsx"));
const Email = lazy(() => import("./Pages/Email/Email.jsx"));
const WhatsApp = lazy(() => import("./Pages/WHATSAPP/WhatsApp.jsx"));
const TermsOfService = lazy(() => import("./Pages/TermandCondition.jsx"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy.jsx"));
const MainVoicePage = lazy(() => import("./Pages/Voice/Mainvoicepage.jsx"));
const CallPatch = lazy(() => import("./Pages/Voice/CallPatch.jsx"));
const ContactCenter = lazy(() => import("./Pages/Voice/ContactCenter.jsx"));
const IVR = lazy(() => import("./Pages/Voice/IVR.jsx"));
const Voice = lazy(() => import("./Pages/Voice/Voice.jsx"));
const VoiceOBD = lazy(() => import("./Pages/Voice/VoiceOBD.jsx"));
const BulkSmsBlog = lazy(() => import("./Pages/Blog/BulkSmsBlog.jsx"));
const BulkEmailBlog = lazy(() => import("./Pages/Blog/BulkEmailBlog.jsx"));
const SmsApiBlog = lazy(() => import("./Pages/Blog/SmsApiBlog.jsx"));
const Blog = lazy(() => import("./Pages/Blog/Blog.jsx"));
const ShimmerUI = lazy(() => import("./Component/ShimmerUI.jsx"));
const BlogDetail = lazy(() => import("./Pages/Blog/BlogDetail.jsx"));
const Admin = lazy(() => import("./Pages/Admin/Admin.jsx"));
// Page Wrapper for Layout Consistency
const PageWrapper = ({ children }) => (
  <>
    <ScrollToTop />
    <Multilevelnav />
    <Suspense fallback={<ShimmerUI />}>
      {children}
    </Suspense>
    <Footer />
  </>
);

// Routes Configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/SMSPricing", element: <SMSPricing /> },
  { path: "/WhatsAppPricing", element: <WhatsAppPricing /> },
  { path: "/RCSPricing", element: <RCSPricing /> },
  { path: "/EmailPricing", element: <EmailPricing /> },
  { path: "/VoicePricing", element: <VoicePricing /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/ScheduleDemo", element: <ScheduleDemo /> },
  { path: "/Career", element: <Career /> },
  { path: "/RCS", element: <RCS /> },
  { path: "/SMS", element: <SMS /> },
  { path: "/SMSAPI", element: <SMSAPI /> },
  { path: "/BulkSMS", element: <BulkSMS /> },
  { path: "/InternationalSMS", element: <InternationalSMS /> },
  { path: "/TwoFactorAuthentication", element: <TwoFactorAuthentication /> },
  { path: "/Email", element: <Email /> },
  { path: "/WhatsApp", element: <WhatsApp /> },
  { path: "/TermsOfService", element: <TermsOfService /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/MainVoicePage", element: <MainVoicePage /> },
  { path: "/CallPatch", element: <CallPatch /> },
  { path: "/ContactCenter", element: <ContactCenter /> },
  { path: "/IVR", element: <IVR /> },
  { path: "/Voice", element: <Voice /> },
  { path: "/VoiceOBD", element: <VoiceOBD /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/BulkSmsBlog", element: <BulkSmsBlog /> },
  { path: "/BulkEmailBlog", element: <BulkEmailBlog /> },
  { path: "/SmsApiBlog", element: <SmsApiBlog /> },
  { path: "/BlogDetail/:id", element: <BlogDetail /> },
  { path: "admin", element: <Admin /> },
  { path: "*", element: <Home /> },
];

// Router Configuration
const router = createBrowserRouter(
  routes.map(({ path, element }) => ({
    path,
    element: <PageWrapper>{element}</PageWrapper>,
  }))
);

// Main App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;