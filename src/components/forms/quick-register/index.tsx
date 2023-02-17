// @ts-nocheck
import React, { useState, useRef } from "react";
import s from "./index.module.css";
import cn from "classnames";
import axios from "axios";
import { MuiTelInput } from "mui-tel-input";
import {
  FormControl,
  FormHelperText,
  Button,
  Slide,
  Box,
  ThemeProvider,
  TextField,
  Checkbox,
} from "@mui/material";
import { theme } from "../../../assets/theme/theme";
const BASE = import.meta.env.VITE_BASE_URL;

type Props = {
  className?: string;
};

declare global {
  interface String {
    handleName(): string;
    capitalize(): string;
  }
}

String.prototype.capitalize = function () {
  let str = this.charAt(0).toUpperCase() + this.slice(1);

  return str;
};

String.prototype.handleName = function () {
  if (this.includes("'"))
    return this.split("'")
      .map((w) => w.capitalize())
      .join("'");

  if (this.includes(" "))
    return this.split(" ")
      .map((w) => `${w.capitalize()}`.trim())
      .join(" ");

  return this;
};

const CircleLoading = () => {
  return (
    <div role="status">
      <svg
        className="inline mx-2 w-6 h-6 text-[#31602a2b] animate-spin  fill-[#2d224c]"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      {/* <span className="sr-only">Loading...</span> */}
    </div>
  );
};

interface FormData {
  name: string;
  phone: string;
  email: string;
  lname: string;
  check: boolean;
}

function QuickRegister(props: Props) {
  const { className } = props;
  const [data, setData] = useState<FormData>();
  const [error, setError] = useState<any>({});
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [generalError, setGeneralError] = useState<boolean | string>(false);
  const [link, setLink] = useState<string>("");

  const inputStyle = {
    "& .MuiInputBase-root": {
      fontSize: "28px",
    },
  };

  React.useEffect(() => {
    setLink(
      "https://edusogno.com/form/edusogno-inglese" + window.location.search
    );
  }, []);

  const handleChange = (e: any) => {
    // console.log(selectRef.current?.value)

    let value: string;
    let name: string;

    if (typeof e === "string") {
      value = e;
      name = "phone";
    } else {
      value = e.target.value;
      name = e.target.name;
    }

    // if (name == check)

    if (["name", "lname"].includes(name)) {
      value = value.capitalize().handleName();
    }

    setError((prev: any) => ({ ...prev, [name]: false }));

    setData((prev: any) => ({ ...prev, [name]: value }));
  };

  const checkErrors = () => {
    let isError = false;

    if (!checked) {
      isError = true;
      setError((prev: any) => ({ ...prev, ["check"]: true }));
    }

    if (!data?.name || data?.name?.trim() == "") {
      isError = true;
      setError((prev: any) => ({ ...prev, ["name"]: true }));
    }

    if (!data?.lname || data?.lname?.trim() == "") {
      isError = true;
      setError((prev: any) => ({ ...prev, ["lname"]: true }));
    }

    if (
      !data?.phone ||
      data?.phone?.trim() == "" ||
      !data.phone.match(
        /^[\+]?[(]?[ \0-9]{4}[)]?[-\s\.]?[ \0-9]{4}[-\s\.]?[ \0-9]{5,7}$/gm
      )
    ) {
      isError = true;
      setError((prev: any) => ({ ...prev, ["phone"]: true }));
    } else {
      setError((prev: any) => ({ ...prev, ["phone"]: false }));
    }

    if (
      !data?.email ||
      data?.email?.trim() == "" ||
      !data.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      isError = true;
      setError((prev: any) => ({ ...prev, ["email"]: true }));
    }

    console.log({ isError });

    return isError;
  };

  const parsedData = () => {
    let subData = { ...data };

    let search = location.search.substring(1);

    let urlObj: object = {};
    if (search !== "") {
      urlObj = JSON.parse(
        '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
          return key === "" ? value : decodeURIComponent(value);
        }
      );
    }

    let re = /(\b[a-z](?!\s))/g;

    let details = [{ label: "offer", value: "Edusogno - inglese" }];

    for (const key in urlObj) {
      details.push({ label: key, value: urlObj[key] });
    }

    let updates: string | object = [
      {
        status: "Nuovo",
        date: new Date(),
        admin: subData.name + " " + subData.lname,
      },
    ];
    updates = JSON.stringify(updates);

    let submit = {
      name: subData.name,
      lname: subData.lname,
      offer: "Edusogno - inglese",
      from: urlObj?.utm_source,
      email: subData?.email,
      phone: subData?.phone?.replace(/\s/g, ""),
      status: "Nuovo",
      details: JSON.stringify(details),
      updates,
    };

    return submit;
  };

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let isError = await checkErrors();

    if (isError) return;

    setIsLoading(true);
    setGeneralError(false);

    let newData = parsedData();

    axios
      .post(
        BASE + "/crm",
        { ...newData },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => res)
      .then((data) => {
        if (data.data.token) {
          location.href = `https://edusogno.com/form/edusogno-inglese/${data.data.token}`;
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response.data.errors.email) {
          console.log(error.response.data.errors.email[0]);
          setGeneralError("Questa mail è stata già registrata");
        } else {
          setGeneralError("Qualcosa è andato storto riprova più tardi");
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={cn(s.root, className)}
        component="a"
        href={link}
        // onSubmit={submitForm}
      >
        <div className="flex flex-col gap-4 max-w-[579px]">
          <div className="flex md:flex-row flex-col gap-x-3">
            <FormControl variant="standard">
              <div
                className={"text-base font-bold label md:text-xl lg:text-2xl "}
              >
                Nome
              </div>
              <TextField
                sx={inputStyle}
                name={"name"}
                placeholder={"Mario"}
                variant="standard"
                value={data?.name ?? ""}
                error={error.name}
                onChange={handleChange}
              />
              <FormHelperText sx={{ mb: 3 }}>
                {error?.name == true ? "Il nome è richiesto" : null}
              </FormHelperText>
            </FormControl>

            <FormControl variant="standard">
              <div
                className={"text-base font-bold label md:text-xl lg:text-2xl "}
              >
                Cognome
              </div>
              <TextField
                sx={inputStyle}
                error={error?.lname == true}
                name={"lname"}
                placeholder={"Rossi"}
                variant="standard"
                value={data?.lname ?? ""}
                onChange={handleChange}
              />
              <FormHelperText sx={{ mb: 3 }}>
                {error?.lname == true ? "Il nome è richiesto" : null}
              </FormHelperText>
            </FormControl>
          </div>

          <FormControl variant="standard">
            <div
              className={"text-base font-bold label md:text-xl lg:text-2xl "}
            >
              Telefono
            </div>
            <MuiTelInput
              sx={inputStyle}
              disableFormatting={false}
              value={data?.phone ?? ""}
              defaultCountry="IT"
              placeholder="+39 333 33 33 333"
              variant="standard"
              onChange={handleChange}
              name="phone"
              error={error?.phone == true}
            />

            <FormHelperText sx={{ mb: 3 }}>
              {error?.phone == true ? "Numero di telefono non valido" : null}
            </FormHelperText>
          </FormControl>

          <FormControl variant="standard">
            <div
              className={"text-base font-bold label md:text-xl lg:text-2xl "}
            >
              Email
            </div>
            <TextField
              sx={inputStyle}
              error={error?.email == true}
              name={"email"}
              placeholder={"mariorossi@email.com"}
              variant="standard"
              value={data?.email ?? ""}
              onChange={handleChange}
            />
            <FormHelperText sx={{ mb: 3 }}>
              {error?.email == true ? "Email non valida" : null}
            </FormHelperText>
          </FormControl>

          <FormControl variant="standard">
            <div className="flex flex-row items-center justify-start ">
              <Checkbox
                sx={{ p: 0 }}
                name="check"
                onClick={() => setChecked((prev) => !prev)}
                value={checked}
              />
              <p className={s.terms + " ml-2"}>
                Accetto la{" "}
                <a
                  target={"_blank"}
                  href="https://www.iubenda.com/privacy-policy/22694950"
                  style={{
                    color: "var(--clr-violet-300)",
                  }}
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            <FormHelperText sx={{ mb: 3 }}>
              {error?.check == true ? "Devi accettare la privacy policy" : null}
            </FormHelperText>
          </FormControl>

          {generalError !== false ? (
            <span className="textfield-error"> {generalError} </span>
          ) : null}

          <button
            disabled={isLoading}
            className="btn-green btn-sm w-[265px] py-6 mx-auto flex items-center justify-center"
            type="submit"
          >
            RICHIEDI INFO {isLoading ? <CircleLoading /> : null}
          </button>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default QuickRegister;
