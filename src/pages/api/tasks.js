import dbConnect from "../../utils/dbConnect";
import Task from "../../models/Task";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  const { method, query } = req;

  switch (method) {
    case "GET": {
      try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
        return res
          .status(500)
          .json({ message: "Failed to fetch tasks", error: error.message });
      }
    }

    case "POST": {
      try {
        const { title, description, assignedTo, assignedBy, status } = req.body;

        const payload = {
          title,
          description,
          status: status || "To Do",
          assignedTo,
          assignedBy,
        };

        const newTask = await Task.create(payload);
        return res.status(201).json(newTask);
      } catch (error) {
        console.error("Error creating task:", error.message);
        return res
          .status(500)
          .json({ message: "Failed to create task", error: error.message });
      }
    }

    case "PUT": {
      try {
        const { id } = query;
        const updateData = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid task ID" });
        }

        const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
          new: true,
        });
        if (!updatedTask)
          return res.status(404).json({ message: "Task not found" });

        return res.status(200).json(updatedTask);
      } catch (error) {
        console.error("Error updating task:", error.message);
        return res
          .status(500)
          .json({ message: "Failed to update task", error: error.message });
      }
    }

    case "DELETE": {
      try {
        const { id } = query;

        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ message: "Invalid task ID" });
        }

        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask)
          return res.status(404).json({ message: "Task not found" });

        return res.status(200).json({ message: "Task deleted successfully" });
      } catch (error) {
        console.error("Error deleting task:", error.message);
        return res
          .status(500)
          .json({ message: "Failed to delete task", error: error.message });
      }
    }

    default:
      return res.status(400).json({ success: false });
  }
}
