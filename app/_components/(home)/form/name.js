import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Name() {
  const name = 'name';

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ref, onChange, onBlur } = register(name, {
    required: '請輸入持卡者姓名',
  });

  return (
    <Label
      required={true}
      text="持卡者姓名"
      errStatus={!!errors[name]}
      errMsg={errors[name]?.message}
    >
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
