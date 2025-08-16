import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Ccv() {
  const name = 'ccv';

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ref, onChange, onBlur } = register(name, {
    required: '請輸入安全碼',
    pattern: {
      value: /^\d{3}$/,
      message: '請檢查輸入 3 位數字',
    },
  });

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
    onChange(e);
  };

  return (
    <Label
      required={true}
      text="安全碼"
      errStatus={!!errors[name]}
      errMsg={errors[name]?.message}
    >
      <Input
        ref={ref}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder="CVC"
        maxLength={3}
        autoComplete="cc-csc"
        inputMode="numeric"
      />
    </Label>
  );
}
