import React from "react";
import TopNav from "./components/TopNav";
import Advertising from "./components/Advertising";
import GetStartedSection from "./components/GetStartedSection";
import Brands from "./components/Brands";
import EscrowSection from "./components/EscrowSection";
import TextEditorSection from "./components/TextEditorSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Advertising />
      <TopNav />
      <GetStartedSection />
      <Brands />
      <EscrowSection />
      <TextEditorSection />
      <Footer />
    </>
  );
};

export default App;
