import { Box, Center } from '@chakra-ui/react';

import CreditCard from '@/app/_components/credit-card';

export default function Home() {
  return (
    <Center m="100px 20px">
      <Box
        w="100%"
        maxW="500px"
        h="auto"
        border="1px solid #0891b2"
        rounded="10px"
        shadow="md"
      >
        <CreditCard />
      </Box>
    </Center>
  );
}
