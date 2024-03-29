/* eslint-disable */
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateTodos } from "../feature/todosSlice";
import Todo from "./Todo";
import { Box } from "@mui/material";
import Header from "./Header";

const Section = ({ status, statusTodo, statusOngoing, statusDone }) => {
  //gettting dispatch method
  const dispatch = useDispatch();

  // Function that monitors drop
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => updateTodoData(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  //update task status data
  const updateTodoData = (id) => {
    const uTodo = { id, status };
    dispatch(updateTodos(uTodo));
  };

  //declearing reassignable variable
  let taskToMap = statusTodo;
  let bg = "bg-slate-500";

  //applying condition to the reassignable variables
  if (status === "ongoing") {
    taskToMap = statusOngoing;
    bg = "bg-purple-500";
  }
  if (status === "done") {
    taskToMap = statusDone;
    bg = "bg-green-500";
  }

  return (
    <Box ref={drop} className="space-y-4">
      <Header text={status} count={taskToMap?.length} bg={bg} />
      <div className={`w-full ${bg} h-[2px]`}></div>
      <Box className="space-y-3">
        {taskToMap?.length > 0 &&
          taskToMap?.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </Box>
    </Box>
  );
};
export default Section;
