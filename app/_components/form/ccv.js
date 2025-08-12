import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Ccv() {
  const { register } = useFormContext();

  return (
    <Label
      required={true}
      text="安全碼"
    >
      <Input
        placeholder="CVC"
        {...register('ccv', { require: true })}
      />
    </Label>
  );
}
