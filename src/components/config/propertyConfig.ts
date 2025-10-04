import * as Yup from "yup";
import type { Property } from "../entities/property";

export const initialPropertyValues = (values?: Property): Property => {
  if (values)
    return {
      ...values,
    };

  return {
    name: "",
    mail: "",
    docs: [],
  };
};

export const propertyValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  mail: Yup.string().required("Mail is required"),
  docs: Yup.array()
    .of(
      Yup.mixed<File>()
        .test("fileType", "Only PNG files are allowed", (file) =>
          file ? file.type === "image/png" : true
        )
        .test("fileSize", "Each file must be <= 2MB", (file) =>
          file ? file.size <= 2 * 1024 * 1024 : true
        )
    )
    .min(1, "At least 1 file is required")
    .max(1, "Number of proof files cannot exceed guest count")
    .required("Proof is required"),
});

export type PropertyFormValues = Yup.InferType<typeof propertyValidation>;
