import { useFormikContext } from "formik";
import BoxInput from "../../utils/Input/BoxInput";
import Uploader from "../../utils/Input/Uploader";
// import Dropzone from "../../utils/Input/Dropzone";
import { type BookingFormValues } from "../../config/bookingFormConfig";
import ProofSlider from "./ProofSlider";
import areFilesSame from "../../helpers/fileSame";
import Dropzone from "../../utils/Input/Dropzone";

const ProofUploadInput = () => {
  const {
    values: { proof, guestCount },
    setFieldValue,
  } = useFormikContext<BookingFormValues>();

  const handleDelete = (file: File) => {
    setFieldValue(
      "proof",
      (proof || []).filter((pr) => pr && !areFilesSame(file, pr))
    );
  };

  return (
    <BoxInput
      name="proof"
      label="Upload Proof"
      extraButton={<Uploader max={guestCount} field="proof" />}
      children={
        proof.length > 0 ? (
          <ProofSlider
            files={proof.filter((pr) => !!pr)}
            onDelete={handleDelete}
          />
        ) : (
          <Dropzone max={guestCount} field="proof" />
        )
      }
    />
  );
};

export default ProofUploadInput;
