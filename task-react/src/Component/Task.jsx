import React, { useState } from 'react' 
import "./task.css"

function Task() {
    const [projects, setProjects] = useState([]);
    const [selectProject, setSelectProject] = useState("");
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [timeSpent, setTimeSpent] = useState("");
    const [description, setDescription] = useState("");

    const Project = () => {
        if(selectProject.trim() !== "") {
            setProjects([...projects, selectProject]);
            setSelectProject("");
        }
    };


    const Task = () => {
        if (taskName.trim() !== "" && timeSpent !== "" && description.trim() !== ""){
            const task = {
                name: taskName,
                time: parseFloat(timeSpent),
                description: description, 
            };
            setTasks([...tasks, task]);
            setTaskName("");
            setTimeSpent("");
            setDescription("");
        }
    };

    const calculateTotalHours = () => {
        let total = 0;
        tasks.forEach((task) => {
            total += task.time;
        });
        return total;
    };

    return (
        <div className='main'>
            <div className="project-task">
                <h2>Create A Project</h2>
                <input
                    type="text"
                    value={selectProject}
                    onChange={(e) => setSelectProject(e.target.value)}
                    placeholder='Project Name'
                />
                <button onClick={Project}>Project</button>

                <h2>Create A Task</h2>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder='Task Name'
                />
                <input
                    type="number"
                    value={timeSpent}
                    onChange={(e) => setTimeSpent(e.target.value)}
                    placeholder='Time Spent'
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                />
                <button onClick={Task}>Task</button>

                <h2>Project</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>

                <h2>Tasks</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task.name} - {task.time} hours - {task.description}
                        </li>
                    ))}
                </ul>

                <h2>Total Hours For The Day</h2>
                <p>{calculateTotalHours()} hours</p>
            </div>
        </div>
    )
}

export default Task;