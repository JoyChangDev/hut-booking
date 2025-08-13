import { Input as ChakraInput } from '@chakra-ui/react';
import { forwardRef } from 'react';

const Input = forwardRef(function Input(props, ref) {
  return (
    <ChakraInput
      ref={ref}
      border="1px solid #e4e4e7"
      _hover={{ border: '1px solid #06b6d4' }}
      _focus={{
        border: '1px solid #06b6d4',
        outline: 'none',
      }}
      _invalid={{ border: '1px solid #ef4444' }}
      _placeholder={{ color: '#a1a1aa' }}
      {...props}
    />
  );
});

export default Input;
