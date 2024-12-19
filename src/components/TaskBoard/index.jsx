import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskCard from "../TaskCard";

export default function TaskBoard({ tasks, setTasks }) {
  const statuses = ["To Do", "In Progress", "Done"];

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeIndex = tasks.findIndex((t) => t.id === active.id);
    const overIndex = tasks.findIndex((t) => t.id === over.id);

    const updatedTasks = arrayMove(tasks, activeIndex, overIndex);
    setTasks(updatedTasks);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      {statuses.map((status) => (
        <div key={status} className="task-column">
          <h2>{status}</h2>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </SortableContext>
        </div>
      ))}
    </DndContext>
  );
}
