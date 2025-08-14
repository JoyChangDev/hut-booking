import { useFormContext } from 'react-hook-form';

import Input from '@/app/_components/ui/input';
import Label from '@/app/_components/ui/label';

export default function Number() {
  const name = 'number';

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ref, onChange, onBlur } = register(name, {
    required: '請輸入信用卡號',
    setValueAs: (value) => value.replace(/\D/g, ''), // 驗證前先更新資料
    pattern: {
      value: /^\d{16}$/,
      message: '請檢查輸入 16 位數字',
    },
  });

  const handleChange = (e) => {
    e.target.value = formatNumber(e.target.value);
    onChange(e);
  };

  return (
    <Label
      required={true}
      text="卡號"
      errStatus={!!errors[name]}
      errMsg={errors[name]?.message}
    >
      <Input
        ref={ref}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder="0000 - 0000 - 0000 - 0000"
        autoComplete="cc-number"
        inputMode="numeric"
      />
    </Label>
  );
}

// 轉換格式為 0000 - 0000 - 0000 - 0000
const formatNumber = (value) =>
  value
    .replace(/\D/g, '')
    .slice(0, 16)
    .match(/.{1,4}/g)
    ?.join(' - ') ?? '';
