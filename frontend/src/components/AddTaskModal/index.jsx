import PropTypes from 'prop-types';
import { React, useState } from 'react';

import { addTask } from '../../api/task.services';

import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import { ContainerBody, Input, Select, TextArea, Button } from './styles';

export default function AddTaskModal(props) {
  const { onHide } = props;
  const [taskNameValue, setTaskNameValue] = useState('');
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('');
  const [taskDateValue, setTaskDateValue] = useState('');
  const [taskStatusValue, setTaskStatusValue] = useState('');

  function resetFieldValues() {
    setTaskNameValue();
    setTaskDescriptionValue();
    setTaskDateValue();
    setTaskStatusValue();
  }
  async function handleSubmitForm(event) {
    event.preventDefault();

    const success = await addTask(
      taskNameValue,
      taskDescriptionValue,
      taskDateValue,
      taskStatusValue,
    );

    if (success) {
      resetFieldValues();
      return onHide();
    }
    return alert('Revise as informações e tente novamente.');
  }

  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle>Add Task:</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <ContainerBody onSubmit={ (event) => handleSubmitForm(event) }>
          <Input
            name="taskName"
            type="text"
            placeholder="Add task..."
            value={ taskNameValue }
            onChange={ ({ target }) => setTaskNameValue(target.value) }
            required
          />
          <TextArea
            name="taskDescription"
            type="text"
            placeholder="Add description..."
            value={ taskDescriptionValue }
            onChange={ ({ target }) => setTaskDescriptionValue(target.value) }
            required
          />
          <Input
            name="taskDate"
            type="date"
            onChange={ ({ target }) => setTaskDateValue(target.value) }
            required
          />
          <Select
            name="taskStatus"
            value={ taskStatusValue }
            onChange={ ({ target }) => setTaskStatusValue(target.value) }
            required
          >
            <option value="" hidden>
              Status
            </option>
            <option value="pending">Pending</option>
            <option value="in_progess">In Progress</option>
            <option value="concluded">Concluded</option>
          </Select>
          <Button type="submit">
            Adicionar
          </Button>
        </ContainerBody>
      </ModalBody>
      <ModalFooter>
        <Button red type="button" onClick={ onHide }>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

AddTaskModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};
