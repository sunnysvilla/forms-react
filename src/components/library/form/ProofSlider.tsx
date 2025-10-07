import { Box, Button, HStack, Icon, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { LuCircleX, LuFileSymlink } from "react-icons/lu";
import { Label } from "../../utils/Typo/Label";
import { Link } from "react-router";

interface CardProps {
  file: File | string;
  onDelete: (file: File) => void;
  last?: boolean;
}

const ProofCard = ({ file, onDelete, last = false }: CardProps) => {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    let blobUrl: string;

    if (file instanceof File) {
      blobUrl = URL.createObjectURL(file);
      setPreview(blobUrl);
    } else {
      setPreview(file);
    }

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [file]);

  if (typeof file === "string")
    return (
      <Link to={file} target="_blank">
        <Button borderRadius="xl" size={{ base: "sm", md: "md" }}>
          <Icon as={LuFileSymlink} boxSize={4} />
          Open Document
        </Button>
      </Link>
    );

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
      <Box flex={1} />
      <Icon as={LuCircleX} color="red.400" onClick={() => onDelete(file)} />
    </HStack>
  );
};

interface Props {
  files: Array<string | File | undefined>;
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
      {files
        .filter((file) => file !== undefined)
        .map((file, i) => (
          <ProofCard
            key={i}
            file={file}
            onDelete={onDelete}
            last={i === files.length - 1}
          />
        ))}
    </VStack>
  );
};

export default ProofSlider;
