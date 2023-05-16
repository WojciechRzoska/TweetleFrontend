import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.style';

interface FormFieldProps {
  id: string;
  name: string;
  // eslint-disable-next-line react/require-default-props
  type?: string;
  value: string;
  placeholder: string;
}
const FormField = ({
  id,
  name,
  type = 'text',
  value,
  placeholder,
}: FormFieldProps) => {
  return (
    <Wrapper>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default FormField;
