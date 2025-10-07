import { useFormikContext } from "formik";
import type { PropertyFormValues } from "../../config/propertyConfig";
import BoxInput from "../../utils/Input/BoxInput";
import Dropzone from "../../utils/Input/Dropzone";
import Uploader from "../../utils/Input/Uploader";
import ProofSlider from "../form/ProofSlider";

const DocUpload = () => {
  const {
    values: { pdf_file },
    setFieldValue,
  } = useFormikContext<PropertyFormValues>();

  const handleDelete = () => {
    setFieldValue("pdf_file", "");
  };

  return (
    <BoxInput
      topRadius="0"
      name="pdf_file"
      label="Document"
      extraButton={<Uploader max={1} field="pdf_file" single />}
      children={
        pdf_file ? (
          <ProofSlider files={[pdf_file]} onDelete={handleDelete} />
        ) : (
          <Dropzone max={1} field="pdf_file" single />
        )
      }
    />
  );
};

export default DocUpload;
