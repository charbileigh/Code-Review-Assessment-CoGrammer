import React, { useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import TaskForm from '../Form/TaskForm';
import './AddModal.css';

const AddModal = () => {
    
    const [open, setOpen] = useState(false);
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='green'><Icon name='add' />Add Task</Button>}
        >
            <Modal.Header>Add Task</Modal.Header>
            <Modal.Content>
                <TaskForm  />
            </Modal.Content>
            <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
                Cancel
            </Button>
            <Button color='green' onClick={() => setOpen(false)}>
                Submit
            </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default AddModal;