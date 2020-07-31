import React from 'react';

function FormField({name, type, label, onChange}) {
  return (
    <div>
      <label>
        {label}
      { type === 'textarea' ?
      <textarea
        type = {type}
        name = {name}
        onChange={onChange}
      />
      :
      <input
        type = {type}
        name = {name}
        onChange={onChange}
      />
      }
      </label>
    </div>
  );
}

export default FormField;
