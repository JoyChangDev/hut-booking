import { Field } from '@chakra-ui/react';

export default function Label({
  text,
  required = false,
  errStatus,
  errMsg,
  children,
}) {
  return (
    <Field.Root
      required={required}
      invalid={!!errStatus}
      gap={0}
    >
      <Field.Label
        color="#072a38"
        fontSize="12px"
      >
        {required && <Field.RequiredIndicator />} {text}
      </Field.Label>
      {children}
      <Field.ErrorText>{errMsg}</Field.ErrorText>
    </Field.Root>
  );
}
