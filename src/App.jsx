import React from "react";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import PartnersSection from "./components/partnersSection";
import FeaturesSection from "./components/featuresSection";
import NotificationsSection from "./components/NotificationsSection";
import BenefitsSection from "./components/benefitsSection";
import HowItWorks from "./components/howItWorks";
import Testimonials from "./components/testimonials";
import BlogSection from "./components/blogSection";
import AppDownload from "./components/appDownload";
import MainFooter from "./components/mainFooter";
const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <PartnersSection />
      <FeaturesSection />
      <NotificationsSection />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <BlogSection />
      <AppDownload />
      <MainFooter />
    </>
  );
};

export default App;
