import { Box, FileUpload, Icon } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";

const Dropzone = () => {
  return (
    <FileUpload.Root maxW="full" alignItems="stretch" maxFiles={10}>
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone minH={40} borderRadius="2xl">
        <Icon size="md" color="fg.muted">
          <LuUpload />
        </Icon>
        <FileUpload.DropzoneContent>
          <Box>Drag and drop files here</Box>
          <Box color="fg.muted">.png, .jpg up to 5MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  );
};

export default Dropzone;
