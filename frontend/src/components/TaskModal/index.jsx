import { GenericInput } from '../GenericInput';
import { GenericTextArea } from '../GenericTextArea';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import { Button } from './styles';

export function TaskModal(props) {
  return (
    <>
      <Modal
      {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle>
            <GenericInput type="text" value={ props.task.name }/>
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <GenericTextArea value={ props.task.description }/>
          {props.task.status}
        </ModalBody>
        <ModalFooter>
          <Button type="button" onClick={props.onHide}>
            Save
          </Button >
          <Button red type="button" onClick={props.onHide}>
            Close
          </Button >
          {/* <button variant="primary" onClick={props.onHide}>
            Save Changes
          </button> */}
        </ModalFooter>
      </Modal>
    </>
  );
}