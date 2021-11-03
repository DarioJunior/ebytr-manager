import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { TextArea } from './styles';

export default function GenericTextArea(props) {
  const { textValue } = props;
  const [textAreaValue, setTextAreaValue] = useState(textValue);

  const handleTextAreaChange = (target) => {
    const { value } = target;
    setTextAreaValue(value);
  };

  return (
    <TextArea
      max_length="50"
      cols="33"
      rows="4"
      value={ textAreaValue }
      onChange={ ({ target }) => handleTextAreaChange(target) }
    />
  );
}

GenericTextArea.defaultProps = {
  textValue: '',
};

GenericTextArea.propTypes = {
  textValue: PropTypes.string,
};
