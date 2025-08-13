import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Expiration() {
  const name = 'expirationDate';

  const { register } = useFormContext();
  const { ref, onChange, onBlur } = register(name, {
    required: '請輸入卡片效期',
  });

  const handleChange = (e) => {
    e.target.value = formatExpiration(e.target.value);
    onChange(e);
  };

  return (
    <Label
      required={true}
      text="卡片效期"
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

const formatExpiration = (value) =>
  value
    .replace(/\D/g, '')
    .slice(0, 4)
    .match(/.{1,2}/g)
    ?.join(' / ') ?? '';
