/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.style';

interface FormFieldProps {
  id: string;
  name: string;
  // eslint-disable-next-line react/require-default-props
  type?: string;
  placeholder: string;
}
const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ id, name, type = 'text', placeholder, ...props }, ref) => {
    return (
      <Wrapper>
        <Input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default FormField;
