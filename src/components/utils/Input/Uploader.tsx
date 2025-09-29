import { Button, FileUpload } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";

const Uploader = () => {
  return (
    <FileUpload.Root accept={["image/png"]} w="max" maxFiles={5}>
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
      <FileUpload.List />
    </FileUpload.Root>
  );
};

export default Uploader;
