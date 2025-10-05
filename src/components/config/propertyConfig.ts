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
    pdf_file: "",
  };
};

export const propertyValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  mail: Yup.string().required("Mail is required"),
  pdf_file: Yup.mixed<File>()
    .test("fileType", "Only PNG files are allowed", (file) =>
      file ? file.type === "image/png" : true
    )
    .test("fileSize", "Each file must be <= 2MB", (file) =>
      file ? file.size <= 2 * 1024 * 1024 : true
    )
    .required("Proof is required"),
});

export type PropertyFormValues = Yup.InferType<typeof propertyValidation>;
