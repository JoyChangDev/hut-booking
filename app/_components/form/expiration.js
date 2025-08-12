import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Expiration() {
  const { register } = useFormContext();

  return (
    <Label
      required={true}
      text="卡片效期"
    >
      <Input
        placeholder="MM / YY"
        {...register('expirationDate', { require: true })}
      />
    </Label>
  );
}
