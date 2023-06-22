/* eslint-disable no-nested-ternary */
/* eslint-disable react/display-name */
import { ForwardedRef, InputHTMLAttributes, Ref, forwardRef } from 'react';
import { Select } from 'components/atoms/Select/Select';
import { Textarea } from 'components/atoms/Textarea/Textarea';
import { Input } from 'components/atoms/Input/Input';
import { FieldError } from 'react-hook-form';
import { Wrapper } from './FormField.style';

export interface FormFieldProps
  extends Omit<
      InputHTMLAttributes<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
      'accept'
    >,
    Partial<DefaultProps> {
  id: string;
  name: string;
  placeholder: string;
}
interface DefaultProps {
  isSelect?: boolean;
  options?: Array<number>;
  isTextArea?: boolean;
  selectLabel?: string;
  accept?: string;
  isError?: any;
}
const FormField = forwardRef<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  FormFieldProps
>(
  (
    {
      id,
      name,
      type = 'text',
      placeholder,
      isSelect = false,
      options,
      isTextArea,
      selectLabel,
      isError,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper>
        {isTextArea ? (
          <Textarea
            name={name}
            id={id}
            placeholder={placeholder}
            maxLength={160}
            wrap="hard"
            {...props}
            ref={ref as Ref<HTMLTextAreaElement>}
          />
        ) : isSelect ? (
          <Select
            name={name}
            id={id}
            placeholder={placeholder}
            ref={ref as Ref<HTMLSelectElement>}
            {...props}
          >
            <option value="" disabled selected>
              {selectLabel}
            </option>
            {options?.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        ) : (
          <Input
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            isError={isError}
            ref={ref as Ref<HTMLInputElement>}
            {...props}
          />
        )}
      </Wrapper>
    );
  }
);

export default FormField;
