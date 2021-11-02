import { React, useState } from 'react';
import { Button, Container } from './styles';

import AddTaskModal from '../AddTaskModal';

export default function AddTask() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Button type="button" onClick={ () => setModalShow(true) }>
        Add Task
      </Button>
      <AddTaskModal
        show={ modalShow }
        onHide={ () => setModalShow(false) }
      />
    </Container>

  );
}
