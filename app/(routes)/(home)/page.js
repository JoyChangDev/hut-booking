'use client';
import { Box, Center, Stack } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

import CreditCard from '@/app/_components/(home)/credit-card';
import ReadOnly from '@/app/_components/(home)/form/read-only';

export default function Home() {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: 'DDD',
      number: '4242 - 4242 - 4242 - 4242',
      expirationDate: '05 / 30',
      ccv: '555',
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log('handleSubmit:', data);
  });

  return (
    <Center m="100px 20px">
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          noValidate
        >
          <Stack
            w="100%"
            maxW="500px"
            h="auto"
            gap="20px"
          >
            <Card>
              <CreditCard />
            </Card>
            <Card>
              <ReadOnly />
            </Card>
          </Stack>
        </form>
      </FormProvider>
    </Center>
  );
}

const Card = ({ children }) => {
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
};
