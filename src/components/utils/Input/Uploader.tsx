import { Button, FileUpload } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { HiUpload } from "react-icons/hi";
import { type BookingFormValues } from "../../config/bookingFormConfig";

export interface UploadProps {
  field: string;
  max?: number;
}

const Uploader = ({ field, max = 1 }: UploadProps) => {
  const { setFieldValue } = useFormikContext<BookingFormValues>();

  return (
    <FileUpload.Root
      accept={["image/png"]}
      w="max"
      maxFiles={max}
      onFileAccept={(details) =>
        setFieldValue(field, max === 1 ? details.files[0] : details.files)
      }
    >
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button
          variant="subtle"
          colorPalette="green"
          borderRadius="full"
          size="sm"
        >
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
    </FileUpload.Root>
  );
};

export default Uploader;
