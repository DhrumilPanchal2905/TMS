import { useDraggable } from '@dnd-kit/core';

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <small>Assigned To: {task.assignedTo?.name}</small>
    </div>
  );
}
