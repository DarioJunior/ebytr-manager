import { useState } from 'react';
import { Input } from './styles';

export function GenericInput(props) {
  const [inputValue, setInputValue] = useState(props.value);

  const handleInputChange = (target) => {
    const value = target.value;
    setInputValue(value);
    console.log(inputValue)
  };

  return (
    <Input type="text" 
      value={ inputValue }
      onChange={ ({ target }) => handleInputChange(target) }
    />
  );
}