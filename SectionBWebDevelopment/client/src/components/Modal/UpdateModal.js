import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import TaskForm from '../Form/TaskForm';

const UpdateModal = (props) => {
    
    const [open, setOpen] = useState(false);
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button circular icon='pencil'color='orange' />}
        >
            <Modal.Header>Update Task</Modal.Header>
            <Modal.Content>
                <TaskForm task={props.task} />
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

export default UpdateModal;