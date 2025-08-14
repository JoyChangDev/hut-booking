import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Expiration() {
  const name = 'expirationDate';

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { ref, onChange, onBlur } = register(name, {
    required: '請輸入卡片效期',
    setValueAs: (value) => formatValidation(value),
    validate: (value) => validate(value),
  });

  const handleChange = (e) => {
    e.target.value = formatInput(e.target.value);
    onChange(e);
  };

  return (
    <Label
      required={true}
      text="卡片效期"
      errStatus={!!errors[name]}
      errMsg={errors[name]?.message}
    >
      <Input
        ref={ref}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder="MM / YY"
        maxLength={7}
        autoComplete="cc-exp"
        inputMode="numeric"
      />
    </Label>
  );
}

const formatInput = (value) =>
  value
    .replace(/\D/g, '')
    .slice(0, 4)
    .match(/.{1,2}/g)
    ?.join(' / ') ?? '';

const formatValidation = (value) => {
  return (
    '20' +
    value
      .split('/')
      .map((s) => s.trim())
      .reverse()
      .join('')
  );
};

const validate = (value) => {
  const match = value.match(
    /^(?<year>\d{4})(?<month>0[1-9]|1[0-2])$/
  );
  if (value.length < 6) return '請檢查輸入 4 位數字';
  if (!match) return '請檢查卡片效期';
  return true;
};
