import * as Yup from "yup";

export const initialBookingValues = {
  name: "",
  guestCount: "",
  phone: "",
  checkInTime: "",
  proof: "",
  period: "AM",
};

export const bookingValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  guests: Yup.number().required("Guest count is required"),
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
});
