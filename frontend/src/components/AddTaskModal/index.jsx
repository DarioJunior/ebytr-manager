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
        <ContainerBody action="POST">
            <Input
              type="text"
              placeholder="Add task..."
            />
            <TextArea
              name="teste"
              type="text"
              placeholder="Add description..."
            />
            <Input type="date" />
            <Select name="category" id="">
              <option value="" hidden>
                Categoria
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Scrum">Scrum</option>
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
