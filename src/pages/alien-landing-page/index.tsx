import { useState } from "react";
import QuickRegister from "../../components/forms/quick-register";
import Hero from "./hero";

import s from "./index.module.css";
import Statistics from "./statistics";
import Testimonies from "./testimonies";
import Approved from "./approved";
import QuickRegSection from "./quick-reg-section";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";
function AlienLandingPage() {
  return (
    <div className={s.root}>
      <Helmet>
        <title>Welcome - Edusogno</title>
      </Helmet>
      <Hero />
      <Statistics />
      <Testimonies />
      <Approved />
      <QuickRegSection id={"last"} />
      <Footer />
    </div>
  );
}

export default AlienLandingPage;
