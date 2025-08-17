import { Box } from '@chakra-ui/react';

export default function Card({ children }) {
  return (
    <Box
      border="1px solid #0891b2"
      rounded="10px"
      p="16px"
      shadow="md"
    >
      {children}
    </Box>
  );
}
