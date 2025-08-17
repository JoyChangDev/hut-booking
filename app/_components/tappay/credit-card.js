'use client';

import { useEffect, useRef } from 'react';
import { Stack, Box, Grid, Button } from '@chakra-ui/react';

import Label from '@/app/_components/ui/label';

export default function CreditCard() {
  const TPDirect = window.TPDirect;

  const numberRef = useRef(null);
  const expiryRef = useRef(null);
  const ccvRef = useRef(null);

  useEffect(() => {
    if (
      !numberRef.current ||
      !expiryRef.current ||
      !ccvRef.current
    )
      return;

    TPDirect.card.setup({
      fields: {
        number: {
          element: numberRef.current,
          placeholder: '0000 0000 0000 0000',
        },
        expirationDate: {
          element: expiryRef.current,
          placeholder: 'MM / YY',
        },
        ccv: {
          element: ccvRef.current,
          placeholder: 'XXX',
        },
      },
      styles: tapStyle,
    });
    TPDirect.card.onUpdate(function (update) {
      console.log('update: ', update);
    });
  }, [numberRef, expiryRef, ccvRef, TPDirect]);

  const handleClick = () => {
    const { canGetPrime, hasError, status } =
      TPDirect.card.getTappayFieldsStatus();
    if (!hasError && canGetPrime) getPrime();
  };

  const getPrime = async () => {
    TPDirect.card.getPrime((result) => {
      console.log('result: ', result);
    });
  };

  return (
    <Stack gap="20px">
      <Label
        required={true}
        text="卡號"
      >
        <Box
          ref={numberRef}
          {...staticStyle}
        />
      </Label>
      <Grid
        templateColumns={{
          base: '1fr 1fr',
          md: '1fr 150px',
        }}
        gap="20px"
      >
        <Label
          required={true}
          text="卡片效期"
        >
          <Box
            ref={expiryRef}
            {...staticStyle}
          />
        </Label>
        <Label
          required={true}
          text="安全碼"
        >
          <Box
            ref={ccvRef}
            {...staticStyle}
          />
        </Label>
      </Grid>

      <Button
        type="submit"
        variant="surface"
        w={{ base: '100%', md: '150px' }}
        alignSelf="flex-end"
        color="white"
        bgColor="#00abc8"
        _hover={{ bgColor: '#0891b2' }}
        onClick={handleClick}
      >
        送出
      </Button>
    </Stack>
  );
}

const staticStyle = {
  w: '100%',
  h: '40px',
  px: '8px',
  border: '1px solid #e4e4e7',
  rounded: '6px',
  _hover: { border: '1px solid #06b6d4' },
  css: {
    '&.tappay-field-focus': { border: '1px solid #06b6d4' },
    '& iframe:focus-visible': { outline: 'none' },
  },
};

const tapStyle = {
  'input': { 'font-size': '16px' },
  '.valid': { 'color': 'green' },
};
