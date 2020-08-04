import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valoresForm, setValoresForm] = useState(valoresIniciais);

  function handleChange(e) {
    setValoresForm({
      ...valoresForm,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }

  function clearForm() {
    setValoresForm(valoresIniciais);
  }

  return {
    valoresForm,
    handleChange,
    clearForm,
  };
}

export default useForm;
