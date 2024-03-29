import { useDrag } from "react-dnd";

const Todo = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: todo?.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className="size-60">
      <img
        ref={drag}
        className={`h-60 ${
          isDragging ? "border-4 border-pink-500" : "border-none"
        }`}
        src={todo?.url}
        alt=""
      />
    </div>
  );
};

export default Todo;
