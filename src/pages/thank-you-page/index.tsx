import { useState } from "react";
import { Helmet } from "react-helmet-async";
import QuickRegister from "../../components/forms/quick-register";
import Hero from "./hero";

import s from "./index.module.css";

function ThankYouPage() {
  const [count, setCount] = useState(0);

  return (
    <div className={s.root}>
      <Helmet>
        <title>Thank You - Edusogno</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Hero />
    </div>
  );
}

export default ThankYouPage;
