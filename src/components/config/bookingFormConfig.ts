import * as Yup from "yup";

export const initialBookingValues = {
  name: "",
  guestCount: 1,
  phone: "",
  checkInTime: "",
  proof: [],
  period: "AM",
};

export const bookingValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  guestCount: Yup.number()
    .min(1, "Minium 1 guest is welcomed")
    .required("Guest count is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  checkInTime: Yup.string().required("Check-in time is required"),
  hours: Yup.number()
    .min(1, "Enter a valid hour")
    .max(12, "Enter a valid hour")
    .required("Hours is required"),
  minutes: Yup.number()
    .min(1, "Enter a valid minute")
    .max(60, "Enter a valid minute")
    .required("Minutes is required"),
  period: Yup.string()
    .oneOf(["AM", "PM"], "Enter a valid period")
    .required("Period is required"),

  proof: Yup.array()
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
    .max(
      Yup.ref("guestCount"),
      "Number of proof files cannot exceed guest count"
    )
    .required("Proof is required"),
});

export type BookingFormValues = Yup.InferType<typeof bookingValidation>;
