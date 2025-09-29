import BoxInput from "../../utils/Input/BoxInput";
import Uploader from "../../utils/Input/Uploader";
// import Dropzone from "../../utils/Input/Dropzone";
import ProofSlider from "./ProofSlider";

const ProofUploadInput = () => {
  return (
    <BoxInput
      label="Check In Time"
      placeholder="Phone"
      extraButton={<Uploader />}
      children={
        <ProofSlider />
        // <Dropzone />
      }
    />
  );
};

export default ProofUploadInput;
