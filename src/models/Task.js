import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  assignedTo: { type: String, required: true }, // Store email as string
  assignedBy: { type: String, required: true }, // Store email as string
  createdAt: { type: Date, default: Date.now },
});

// Clear previous Mongoose model cache
delete mongoose.connection.models['Task'];
const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;
