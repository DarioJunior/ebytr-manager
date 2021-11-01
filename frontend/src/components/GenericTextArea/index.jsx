import { useState } from 'react';
import { TextArea } from './styles';

export function GenericTextArea(props) {
  const [textAreaValue, setTextAreaValue] = useState(props.value);

  const handleTextAreaChange = (target) => {
    const value = target.value;
    setTextAreaValue(value);
    console.log(textAreaValue.length)
  };
  return (
    <TextArea
      max_length="50"
      cols="33"
      rows="4"
      value={ textAreaValue }
      onChange={ ({ target }) => handleTextAreaChange(target) }/>
  )
}