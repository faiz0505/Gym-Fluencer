import React from "react";
import Feature from "../components/Feature";
import Services from "../components/Services";
import Benifits from "../components/Benifits";
import Feedback from "../components/Feedback";
import Blogs from "../components/Blogs";
import Header from "../components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <Feature />
      <Services />
      <Benifits />
      <Feedback />
      <Blogs />
    </>
  );
};

export default Index;
