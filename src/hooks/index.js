import { useState } from 'react';

export function useTextFields(initialValues) {
  const [values, setValues] = useState(initialValues);

  function updateValues(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return [values, updateValues];
}
