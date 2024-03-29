/* eslint-disable */
import { useDrag } from "react-dnd";
import { deleteTodos } from "../feature/todosSlice";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

const Todo = ({ todo }) => {
  //get dispatch medhod
  const dispatch = useDispatch();

  //drag and drop function
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: todo?.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // event handler for delete task
  const handleDeleteTodo = (id) => {
    //dispatching action
    dispatch(deleteTodos(id));

    //toast for notification
    toast.success("Task Deleted");
  };

  return (
    <Box
      ref={drag}
      className={`flex justify-between items-center p-3 px-5 shadow-md cursor-pointer rounded-md ${
        isDragging ? "opacity-30" : "opacity-100"
      }`}
    >
      <Typography variant="subtitle1">{todo.title}</Typography>
      <IconButton onClick={() => handleDeleteTodo(todo.id)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Todo;
