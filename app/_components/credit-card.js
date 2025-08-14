'use client';

import { Stack, Grid, Button } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

import Name from '@/app/_components/form/name';
import Number from '@/app/_components/form/number';
import Expiration from '@/app/_components/form/expiration';
import Ccv from '@/app/_components/form/ccv';

export default function CreditCard() {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = methods.handleSubmit((data) =>
    console.log(data)
  );

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        noValidate
      >
        <Stack
          p="16px"
          gap="20px"
        >
          <Name />
          <Number />

          <Grid
            templateColumns={{
              base: '1fr 1fr',
              md: '1fr 150px',
            }}
            gap="20px"
          >
            <Expiration />
            <Ccv />
          </Grid>

          <Button
            type="submit"
            variant="surface"
            w={{ base: '100%', md: '150px' }}
            alignSelf="flex-end"
            color="white"
            bgColor="#00abc8"
            _hover={{ bgColor: '#0891b2' }}
          >
            送出
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
