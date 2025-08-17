'use client';
import { useEffect, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';

import Card from '@/app/_components/ui/card';
import CreditCard from '@/app/_components/tappay/credit-card';

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
        maxW="400px"
        h="auto"
      >
        <Card>
          <CreditCard />
        </Card>
      </Box>
    </Center>
  );
}
