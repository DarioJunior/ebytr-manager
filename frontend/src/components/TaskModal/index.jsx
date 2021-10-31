import { Button } from './styles';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

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
          <ModalTitle>{ props.task.name }</ModalTitle>
        </ModalHeader>
        <ModalBody>{ props.task.description }</ModalBody>
        <ModalFooter>
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