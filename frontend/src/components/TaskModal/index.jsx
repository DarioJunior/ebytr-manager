import { React, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';

import GenericInput from '../GenericInput';
import GenericSelect from '../GenericSelect';
import GenericInputDate from '../GenericDate';
import GenericTextArea from '../GenericTextArea';

import { editTask } from '../../api/task.services';

import { Button, ModalBodyContainer } from './styles';

export default function TaskModal(props) {
  const { task, onHide } = props;
  const { _id, name, description, status } = task;

  console.log('task', task);

  const [inputValue, setInputValue] = useState(name);
  const [textAreaValue, setTextAreaValue] = useState(description);
  const [dateInputValue, setDateInputValue] = useState(description);
  const [statusValue, setStatusValue] = useState(status);

  const handleEditUpdate = async () => {
    const success = await editTask(
      _id,
      inputValue,
      textAreaValue,
      dateInputValue,
      statusValue,
    );

    if (success) {
      document.location.reload(false);
      return onHide();
    }
  };

  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle>
          <GenericInput
            type="text"
            inputValue={ inputValue }
            setInputValue={ setInputValue }
          />
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <ModalBodyContainer>
          <GenericTextArea
            textAreaValue={ textAreaValue }
            setTextAreaValue={ setTextAreaValue }
          />
          <GenericSelect
            statusValue={ statusValue }
            setStatusValue={ setStatusValue }
          />
          <GenericInputDate
            dateInputValue={ dateInputValue }
            setDateInputValue={ setDateInputValue }
          />
        </ModalBodyContainer>
      </ModalBody>
      <ModalFooter>
        <Button type="button" onClick={ () => { handleEditUpdate(); onHide(); } }>
          Save
        </Button>
        <Button red type="button" onClick={ onHide }>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

TaskModal.defaultProps = {
  task: {},
};

TaskModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  task: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
};
