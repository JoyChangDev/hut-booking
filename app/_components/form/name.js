import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Name() {
  const name = 'name';

  const { register } = useFormContext();
  const { ref, onChange, onBlur } = register(name);

  return (
    <Label text="持卡者姓名">
      <Input
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="持卡者姓名"
      />
    </Label>
  );
}
