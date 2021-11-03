import PropTypes from 'prop-types';
import { React } from 'react';
import { Input } from './styles';

export default function GenericInput(props) {
  const { inputValue, setInputValue } = props;

  return (
    <Input
      type="text"
      value={ inputValue }
      onChange={ ({ target }) => setInputValue(target.value) }
    />
  );
}

GenericInput.defaultProps = {
  inputValue: '',
  setInputValue: PropTypes.func,
};

GenericInput.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
};
