/* eslint-disable react-hooks/rules-of-hooks */

import { useSate } from 'react';

const textField = initialValues => {
  const [values, setValues] = useSate(initialValues);

  function updateValues(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return [values, updateValues];
};

module.exports = textField;
