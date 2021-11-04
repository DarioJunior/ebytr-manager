import PropTypes from 'prop-types';
import { React } from 'react';
import { Input } from './styles';

export default function GenericInputDate(props) {
  const { dateInputValue, setDateInputValue } = props;

  return (
    <Input
      type="date"
      value={ dateInputValue }
      onChange={ ({ target }) => setDateInputValue(target.value) }
    />
  );
}

GenericInputDate.defaultProps = {
  dateInputValue: '',
  setDateInputValue: PropTypes.func,
};

GenericInputDate.propTypes = {
  dateInputValue: PropTypes.string,
  setDateInputValue: PropTypes.func,
};
