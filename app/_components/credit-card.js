import { Stack, Grid } from '@chakra-ui/react';

import Input from './input';
import Label from './label';

export default function CreditCard() {
  return (
    <Stack
      p="16px"
      gap="20px"
    >
      <Label text="持卡者姓名">
        <Input placeholder="持卡者姓名" />
      </Label>
      <Label
        required={true}
        text="卡號"
      >
        <Input placeholder="0000 - 0000 - 0000 - 0000" />
      </Label>
      <Grid
        templateColumns="2fr 1fr"
        gap="20px"
      >
        <Label
          required={true}
          text="卡片效期"
        >
          <Input placeholder="MM / YY" />
        </Label>
        <Label
          required={true}
          text="安全碼"
        >
          <Input placeholder="CVC" />
        </Label>
      </Grid>
    </Stack>
  );
}
