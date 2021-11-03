import PropTypes from 'prop-types';
import { React } from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';

import { GenericInput } from '../GenericInput';
import GenericTextArea from '../GenericTextArea';
import { Button, ModalBodyContainer } from './styles';

export default function TaskModal(props) {
  const { task, onHide } = props;

  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle>
          <GenericInput type="text" value={ task.name } />
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <ModalBodyContainer>
          <GenericTextArea textValue={ task.description } />
          {task.status}
        </ModalBodyContainer>
      </ModalBody>
      <ModalFooter>
        <Button type="button" onClick={ onHide }>
          Save
        </Button>
        <Button red type="button" onClick={ onHide }>
          Close
        </Button>
        {/* <button variant="primary" onClick={props.onHide}>
            Save Changes
          </button> */}
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
    description: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
};
