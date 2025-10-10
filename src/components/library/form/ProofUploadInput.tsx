import { useFormikContext } from "formik";
import BoxInput from "../../utils/Input/BoxInput";
import Uploader from "../../utils/Input/Uploader";
import { type BookingFormValues } from "../../config/bookingFormConfig";
import ProofSlider from "./ProofSlider";
import areFilesSame from "../../helpers/fileSame";
import Dropzone from "../../utils/Input/Dropzone";

const ProofUploadInput = () => {
  const {
    values: { pdf_file, guests },
    setFieldValue,
  } = useFormikContext<BookingFormValues>();

  const handleDelete = (file: File) => {
    setFieldValue(
      "pdf_file",
      (pdf_file || []).filter((pr) => pr && !areFilesSame(file, pr))
    );
  };

  return (
    <BoxInput
      name="pdf_file"
      label="Upload Proof"
      extraButton={<Uploader max={guests} field="pdf_file" accept="*/*" />}
      children={
        pdf_file.length > 0 ? (
          <ProofSlider
            files={pdf_file.filter((pr) => !!pr)}
            onDelete={handleDelete}
          />
        ) : (
          <Dropzone max={guests} field="pdf_file" accept="*/*" />
        )
      }
    />
  );
};

export default ProofUploadInput;
