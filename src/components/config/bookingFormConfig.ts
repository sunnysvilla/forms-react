import * as Yup from "yup";

export const initialBookingValues = {
  name: "",
  guestCount: "",
  phone: "",
  checkInTime: "",
  proof: "",
};

export const bookingValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  guestCount: Yup.number().required("Guest count is required"),
  phone: Yup.string().required("Phone number is required"),
  checkInTime: Yup.string().required("Check-in time is required"),
});
