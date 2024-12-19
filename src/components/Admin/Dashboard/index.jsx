"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";

export default function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });
  const router = useRouter();

  // ** Fetch session, tasks, and users **
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return router.push("/");

      try {
        const { data: session } = await axios.get("/api/auth/session", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(session.user.email);

        const { data: tasks } = await axios.get("/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(tasks);

        const { data: users } = await axios.get("/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(users);
      } catch (error) {
        console.error("Session expired or invalid", error);
        localStorage.removeItem("token");
        router.push("/");
      }
    };

    fetchData();
  }, [router]);

  // ** Add a new task **
  const handleAddTask = async () => {
    if (!newTask.title.trim() || !newTask.assignedTo) {
      return alert("Title and Assignee are required");
    }

    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "/api/tasks",
        { ...newTask, status: "To Do", assignedBy: user },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setTasks((prevTasks) => [...prevTasks, data]);
      setNewTask({ title: "", description: "", assignedTo: "" });
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  // ** Delete a task **
  const handleDeleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/tasks?id=${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  // ** Handle Drag and Drop **
  const handleDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const newStatus = destination.droppableId;
    if (!["To Do", "In Progress", "Done"].includes(newStatus)) {
      console.error("Invalid status:", newStatus);
      return;
    }

    const taskToUpdate = tasks.find((task) => task._id === draggableId);
    if (!taskToUpdate) return;

    if (user !== "admin@example.com" && taskToUpdate.assignedTo !== user) {
      alert("You can only move tasks assigned to you.");
      return;
    }

    const updatedTasks = tasks.map((task) => {
      if (task._id === draggableId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `/api/tasks?id=${draggableId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Failed to update task", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome, {user}</h2>

      <div className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <select
          value={newTask.assignedTo}
          onChange={(e) =>
            setNewTask({ ...newTask, assignedTo: e.target.value })
          }
        >
          <option value="">Select Assignee</option>
          {users.map((u) => (
            <option key={u._id} value={u.email}>
              {u.email}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board">
          {["To Do", "In Progress", "Done"].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="board-column"
                >
                  <h3>{status}</h3>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="task-card"
                          >
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                            <small>Assigned to: {task.assignedTo}</small>
                            <br />
                            <small>Assigned by: {task.assignedBy}</small>
                            {(user === "admin@example.com" ||
                              task.assignedTo === user) && (
                              <AiOutlineDelete
                                className="delete-icon"
                                onClick={() => handleDeleteTask(task._id)}
                              />
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
