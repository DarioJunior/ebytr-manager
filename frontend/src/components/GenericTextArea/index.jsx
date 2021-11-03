import PropTypes from 'prop-types';
import { React } from 'react';
import { TextArea } from './styles';

export default function GenericTextArea(props) {
  const { textAreaValue, setTextAreaValue } = props;

  return (
    <TextArea
      max_length="50"
      cols="33"
      rows="4"
      value={ textAreaValue }
      onChange={ ({ target }) => setTextAreaValue(target.value) }
    />
  );
}

GenericTextArea.defaultProps = {
  textAreaValue: '',
  setTextAreaValue: PropTypes.func,
};

GenericTextArea.propTypes = {
  setTextAreaValue: PropTypes.func,
  textAreaValue: PropTypes.string,
};
