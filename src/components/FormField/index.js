import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => (value.length > 0) && css`
    &:not([type='color']) + ${Label.Text} {
      transform: scale(.6) translateY(-10px);
    }
  `}
`;

function FormField({
  name, type, label, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const asType = (type === 'textarea') ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          type={type}
          id={fieldId}
          as={asType}
          name={name}
          value={value}
          onChange={onChange}
          list={suggestions ? `suggestionFor_${fieldId}` : undefined}
          autocomplete={suggestions ? 'off' : 'on'}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        { suggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
              suggestions.map((suggestion) => (
                <option value={suggestion} id={`option_${fieldId}`}>
                  {suggestion}
                </option>
              ))
            }
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

FormField.defaultProps = {
  name: '',
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

export default FormField;
