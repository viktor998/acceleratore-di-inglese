import { useState } from "react";
import QuickRegister from "../../components/forms/quick-register";
import Hero from "./hero";

import s from "./index.module.css";
import Statistics from "./statistics";
import Testimonies from "./testimonies";
import Approved from "./approved";
import QuickRegSection from "./quick-reg-section";
import Footer from "./footer";
function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <div className={s.root}>
      <Hero />
      <Statistics />
      <Testimonies />
      <Approved />
      <QuickRegSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
