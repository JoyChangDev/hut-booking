import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Name() {
  const { register } = useFormContext();

  return (
    <Label text="持卡者姓名">
      <Input
        placeholder="持卡者姓名"
        {...register('name')}
      />
    </Label>
  );
}
