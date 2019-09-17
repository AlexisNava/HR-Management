/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';

export function textField(initialValues) {
  const [values, setValues] = useState(initialValues);

  function updateValues(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return [values, updateValues];
}
