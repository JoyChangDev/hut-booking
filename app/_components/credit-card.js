'use client';

import { useEffect, useRef } from 'react';
import {
  Stack,
  Grid,
  Button,
  Input,
} from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

import Name from '@/app/_components/form/name';
import Number from '@/app/_components/form/number';
import Expiration from '@/app/_components/form/expiration';
import Ccv from '@/app/_components/form/ccv';

export default function CreditCard() {
  const TPDirect = window.TPDirect;

  const numberRef = useRef(null);
  const expiryRef = useRef(null);
  const ccvRef = useRef(null);

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
  const values = methods.watch();

  useEffect(() => {
    if (
      !numberRef.current ||
      !expiryRef.current ||
      !ccvRef.current
    )
      return;

    TPDirect.card.setup({
      fields: {
        number: { element: numberRef.current },
        expirationDate: { element: expiryRef.current },
        ccv: { element: ccvRef.current },
      },
      styles: {
        '.valid': { 'color': 'green' },
        '.invalid': { 'color': 'red' },
      },
    });
    // TPDirect.card.onUpdate(function (update) {
    //   console.log('update: ', update);
    // });
  }, [numberRef, expiryRef, ccvRef, TPDirect]);

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log('handleSubmit:', data);
    console.log('numberRef: ', numberRef.current);
    console.log('expiryRef: ', expiryRef.current);
    console.log('ccvRef: ', ccvRef.current);
    const res = TPDirect.card.getTappayFieldsStatus();
    console.log('res: ', res);
  });

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

      <Stack display="none">
        <Input
          readOnly
          ref={numberRef}
          value={values.number || ''}
        />
        <Input
          readOnly
          ref={expiryRef}
          value={values.expirationDate || ''}
        />
        <Input
          readOnly
          ref={ccvRef}
          value={values.ccv || ''}
        />
      </Stack>
    </FormProvider>
  );
}
