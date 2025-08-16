'use client';
import { Box, Center } from '@chakra-ui/react';

import CreditCard from '@/app/_components/credit-card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (window.TPDirect) {
        setIsReady(true);
        clearInterval(t);
      }
    }, 50);
    return () => clearInterval(t);
  }, []);

  if (!isReady) return null;
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
