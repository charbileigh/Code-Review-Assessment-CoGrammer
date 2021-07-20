import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import UpdateModal  from '../../components/Modal/UpdateModal';
import AddModal from '../../components/Modal/AddModal';
import { connect } from 'react-redux';
import { getTasks, deleteTasks } from '../../actions/taskAction';
import './Dashboard.css';


class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getTasks();
    }

    onDelete = (id) => {
        this.props.deleteTasks(id);
    }

    render(){
        const tasks = this.props.tasks;
        return (
            <div>
                <h1 className="heading">Tasks</h1>
                <Table striped compact={true}>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            tasks.map(task => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{task.name}</Table.Cell>
                                        <Table.Cell>{task.description}</Table.Cell>
                                        <Table.Cell>{task.date}</Table.Cell>
                                        <Table.Cell> <Button circular icon='remove' color='red' onClick={() => this.onDelete(task.id)} /> <UpdateModal task={task} /> </Table.Cell>
                                    </Table.Row>
                                );
                            })
                        }
                    </Table.Body>
                </Table>
                <AddModal />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, { getTasks, deleteTasks })(Dashboard);