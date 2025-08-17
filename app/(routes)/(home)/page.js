'use client';
import { Box, Center, Stack } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

import Card from '@/app/_components/ui/card';
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
      <Box
        w="100%"
        maxW="400px"
        h="auto"
      >
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            noValidate
          >
            <Stack gap="20px">
              <Card>
                <CreditCard />
              </Card>
              <Card>
                <ReadOnly />
              </Card>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </Center>
  );
}
