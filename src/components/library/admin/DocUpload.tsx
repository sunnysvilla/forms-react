import { useFormikContext } from "formik";
import type { PropertyFormValues } from "../../config/propertyConfig";
import areFilesSame from "../../helpers/fileSame";
import BoxInput from "../../utils/Input/BoxInput";
import Dropzone from "../../utils/Input/Dropzone";
import Uploader from "../../utils/Input/Uploader";
import ProofSlider from "../form/ProofSlider";

const DocUpload = () => {
  const {
    values: { docs },
    setFieldValue,
  } = useFormikContext<PropertyFormValues>();

  const handleDelete = (file: File) => {
    setFieldValue(
      "docs",
      (docs || []).filter((pr) => pr && !areFilesSame(file, pr))
    );
  };

  return (
    <BoxInput
      name="doc"
      label="Document"
      extraButton={<Uploader max={1} field="docs" />}
      children={
        docs.length > 0 ? (
          <ProofSlider
            files={docs.filter((pr) => !!pr)}
            onDelete={handleDelete}
          />
        ) : (
          <Dropzone max={1} field="docs" />
        )
      }
    />
  );
};

export default DocUpload;
