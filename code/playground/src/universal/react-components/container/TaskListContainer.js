import React, { Component } from "react";
import { connect } from "react-redux";
import TaskList from "../presentational/TaskList"
import { TaskEntity } from "../../entities/TaskEntity";

const mapStateToProps = (state) => {
    return {
        tasks: state.entities[TaskEntity.entityName()].calculatedEntities
    };
};

class TaskListContainer extends Component {
    render() {
        return <TaskList tasks={this.props.tasks} />;
    }
}

export default connect(mapStateToProps, null)(TaskListContainer);
