import { useState } from 'react';
import { ContainerBody, Input, Select, TextArea, Button } from './styles';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


export function AddTaskModal(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle>Add Task:</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <ContainerBody action="localhost:3333/task" method="POST">
            <Input
              name="taskName"
              type="text"
              placeholder="Add task..."
              required
            />
            <TextArea
              name="taskDescription"
              type="text"
              placeholder="Add description..."
              required
            />
            <Input
              name="taskDate"
              type="date"
              required
            />
            <Select name="taskStatus" id="taskStatus" required>
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
        <Button red type="button" onClick={props.onHide}>
          Close
        </Button >
      </ModalFooter>
    </Modal>
  )
}
