import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import '../../styles/task.scss';


const TaskListComponent = () => {
    const defaultTask1 = new Task('example1','Default description1',false, LEVELS.NORMAL);
    const defaultTask2 = new Task('example2','Default description2',true, LEVELS.URGENT);
    const defaultTask3 = new Task('example3','Default description2',false, LEVELS.BLOCKING);


    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Task state has been modified");
        //para simular retardo de 2 segundos pero no funciona en mi pc
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        setLoading(false);

        return () => {
           console.log("TaskList component is going to unmount...");
        };
    }, [tasks]);
   

    function completeTask(task){ 
        console.log('complete this task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //we update the state of the component and it will update the
        //iteration of the task in order to show the task updated
        //with the new list of tasks
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('complete this task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('complete this task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index)=> {
                        return(
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>                                            
                            </TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let taskTable = <Table></Table>
    if(tasks.length > 0){
        taskTable = <Table></Table>
    }else{
        taskTable = 
        <div>
            <h3>There are not tasks to show</h3>
            <h4>Please, create one task</h4>
        </div>
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' style={ {position: 'relative', height: '400px'}}>
                        {/**Todo: add loading spinner */}
                        {loading ? (<p style={loadingStyle}>Loading tasks</p>) : taskTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    

    );
};


export default TaskListComponent;


