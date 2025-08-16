'use client';
import { Stack, Input, Grid } from '@chakra-ui/react';

import { useFormContext } from 'react-hook-form';

export default function ReadOnly() {
  const { watch } = useFormContext();
  // const values = watch();
  const name = watch('name') || '';
  const number = watch('number') || '';
  const expiry = watch('expirationDate') || '';
  const ccv = watch('ccv') || '';

  return (
    <Stack gap="20px">
      <Input
        readOnly
        disabled
        value={name}
      />
      <Input
        readOnly
        disabled
        value={number}
      />

      <Grid
        templateColumns={{
          base: '1fr 1fr',
          md: '1fr 150px',
        }}
        gap="20px"
      >
        <Input
          readOnly
          disabled
          value={expiry}
        />
        <Input
          readOnly
          disabled
          value={ccv}
        />
      </Grid>
    </Stack>
  );
}
