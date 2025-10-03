import * as toast from "@zag-js/toast";
import { type ReactNode } from "react";

export default function toasterMaker(
  status: "success" | "error" | "info" | "warning",
  desc?: string,
  duration = 2000
) {
  return {
    title: status.charAt(0).toUpperCase() + status.slice(1, status.length),
    duration: duration,
    description: desc,
    type: status,
    placement: "top",
  } as toast.Options<ReactNode>;
}
