import * as Yup from "yup";

export const initialBookingValues = {
  name: "",
  guests: 1,
  phone: "",
  arrival: "",
  slug: "",
  pdf_file: [],
  period: "AM",
};

export const bookingValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  guests: Yup.number()
    .min(1, "Minium 1 guest is welcomed")
    .required("Guest count is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  arrival: Yup.string().required("Arrival time is required"),
  pdf_file: Yup.array()
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
    .max(Yup.ref("guests"), "Number of proof files cannot exceed guest count")
    .required("Proof is required"),
});

export type BookingFormValues = Yup.InferType<typeof bookingValidation>;
