import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Number() {
  const { register } = useFormContext();

  return (
    <Label
      required={true}
      text="卡號"
    >
      <Input
        placeholder="0000 - 0000 - 0000 - 0000"
        {...register('number', { require: true })}
      />
    </Label>
  );
}
