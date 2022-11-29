import { ComponentType } from "react";
// import {} from "../../../components/Icons";
import {
  CaAgenda,
  CaPersonalInformation,
  CaMaterials,
  CaAvailability,
  CaExercise,
  CaInvoices,
} from "../../../components/Icons";

export const menuItems: Array<{
  type: "label" | "item";
  value: string;
  Icon?: ComponentType;
  path?: string;
}> = [
  { type: "label", value: "your path" },
  { type: "item", value: "agenda", Icon: CaAgenda, path: "agenda" },
  { type: "item", value: "exercise", Icon: CaExercise },
  { type: "item", value: "materials", Icon: CaMaterials },
  { type: "label", value: "your profile" },
  { type: "item", value: "personal information", Icon: CaPersonalInformation },
  { type: "item", value: "invoices", Icon: CaInvoices },
  { type: "item", value: "availability", Icon: CaAvailability },
];
