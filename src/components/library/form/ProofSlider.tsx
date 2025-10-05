import { Box, HStack, Icon, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { LuCircleX } from "react-icons/lu";
import { Label } from "../../utils/Typo/Label";

interface CardProps {
  file: File;
  onDelete: (file: File) => void;
  last?: boolean;
}

const ProofCard = ({ file, onDelete, last = false }: CardProps) => {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    const blobUrl = URL.createObjectURL(file);
    setPreview(blobUrl);
    return () => URL.revokeObjectURL(blobUrl);
  }, [file]);

  return (
    <HStack
      w="100%"
      py={6}
      borderBottom={last ? "none" : "1px solid"}
      borderColor="gray.300"
    >
      <Box
        w={16}
        h={12}
        bg={`url(${preview})`}
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        bgColor="white"
        borderRadius="xl"
      />
      <Label> {file.name} </Label>
      <Icon as={LuCircleX} color="red.400" onClick={() => onDelete(file)} />
    </HStack>
  );
};

interface Props {
  files: File[];
  onDelete: (file: File) => void;
}

const ProofSlider = ({ files, onDelete }: Props) => {
  return (
    <VStack
      mt={2}
      w="100%"
      maxW="100%"
      overflowY="auto"
      minH="max"
      maxH={200}
      borderRadius="xl"
    >
      {files.map((file, i) => (
        <ProofCard
          key={file.name}
          file={file}
          onDelete={onDelete}
          last={i === files.length - 1}
        />
      ))}
    </VStack>
  );
};

export default ProofSlider;
