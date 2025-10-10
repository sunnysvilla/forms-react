import { Button, FileUpload } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { type BookingFormValues } from "../../config/bookingFormConfig";
import { LuUpload } from "react-icons/lu";

export interface UploadProps {
  field: string;
  max?: number;
  single?: boolean;
}

const Uploader = ({ field, max = 1, single = false }: UploadProps) => {
  const { setFieldValue } = useFormikContext<BookingFormValues>();

  return (
    <FileUpload.Root
      disabled={max < 1}
      accept={["*/*"]}
      w="max"
      maxFiles={max}
      onFileAccept={(details) => {
        console.log(details);
        setFieldValue(field, single ? details.files[0] : details.files);
      }}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button borderRadius="xl" size="xs">
          <LuUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
    </FileUpload.Root>
  );
};

export default Uploader;
