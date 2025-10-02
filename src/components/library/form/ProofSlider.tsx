import { Box, HStack, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { LuX } from "react-icons/lu";

interface CardProps {
  file: File;
  onDelete: (file: File) => void;
}

const ProofCard = ({ file, onDelete }: CardProps) => {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    const blobUrl = URL.createObjectURL(file);
    setPreview(blobUrl);
    return () => URL.revokeObjectURL(blobUrl);
  }, [file]);

  return (
    <Box
      w={200}
      minW={240}
      h={180}
      p={4}
      borderRadius="xl"
      pos="relative"
      bgImage={`url(${preview})`}
      bgSize="cover"
      bgPos="center"
    >
      <Box
        p={1}
        pos="absolute"
        top={3}
        right={3}
        bg="white"
        lineHeight={0}
        w="max"
        borderRadius="full"
        cursor="pointer"
        onClick={() => onDelete(file)}
      >
        <Icon as={LuX} size="xs" />
      </Box>
    </Box>
  );
};

interface Props {
  files: File[];
  onDelete: (file: File) => void;
}

const ProofSlider = ({ files, onDelete }: Props) => {
  return (
    <HStack w="100%" maxW="100%" overflowX="auto" minH="max" borderRadius="xl">
      {files.map((file) => (
        <ProofCard key={file.name} file={file} onDelete={onDelete} />
      ))}
    </HStack>
  );
};

export default ProofSlider;
