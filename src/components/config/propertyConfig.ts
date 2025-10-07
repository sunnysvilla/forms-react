import * as Yup from "yup";
import type { Property, PropertyResponse } from "../entities/property";

export const initialPropertyValues = (values?: PropertyResponse): Property => {
  if (values)
    return {
      ...values,
      pdf_file: values.checkinDocPreview,
    };

  return {
    name: "",
    mail: "",
    pdf_file: "",
  };
};

export const propertyValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  mail: Yup.string().required("Mail is required"),
  pdf_file: Yup.mixed<File | string>()
    .test("fileType", "Only PNG files are allowed", (value) => {
      // If it's a string (URL), accept it — it's an existing file
      if (typeof value === "string") return true;

      // Otherwise, validate the file type
      return value ? value.type === "image/png" : false;
    })
    .test("fileSize", "Each file must be <= 2MB", (value) => {
      // Skip if it's a string (existing file)
      if (typeof value === "string") return true;

      // Validate size if it's a new file
      return value ? value.size <= 2 * 1024 * 1024 : false;
    })
    .required("Proof is required"),
});

export type PropertyFormValues = Yup.InferType<typeof propertyValidation>;
