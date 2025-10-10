import { Box, FileUpload, Icon } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";
import type { UploadProps } from "./Uploader";
import { useFormikContext } from "formik";
import type { BookingFormValues } from "../../config/bookingFormConfig";

const Dropzone = ({ max = 1, field, single }: UploadProps) => {
  const { setFieldValue } = useFormikContext<BookingFormValues>();

  return (
    <FileUpload.Root
      disabled={max < 1}
      cursor={max < 1 ? "disabled" : "auto"}
      mt={4}
      maxW="full"
      alignItems="stretch"
      maxFiles={max}
      onFileAccept={(details) =>
        setFieldValue(field, single ? details.files[0] : details.files)
      }
    >
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone minH={40} borderRadius="2xl">
        <Icon size="md" color="fg.muted">
          <LuUpload />
        </Icon>
        <FileUpload.DropzoneContent>
          <Box>Drag and drop files here</Box>
          <Box color="fg.muted">.png, .jpg up to 2MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
    </FileUpload.Root>
  );
};

export default Dropzone;
