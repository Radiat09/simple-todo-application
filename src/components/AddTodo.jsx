import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../feature/todosSlice";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import toast from "react-hot-toast";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  //get all tasks data
  const todos = useSelector((state) => state?.todosReducer?.todos);

  //get the dispatch method
  const dispatch = useDispatch();

  //event handler for adding todo task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3) {
      return toast.error("Please enter 3 or more characters");
    }
    const todo = { id: todos.length + 1, title, status: "todo" };
    dispatch(addTodos(todo));

    //toast for notification
    toast.success("Task Added");
  };

  return (
    <Box className="max-w-lg">
      <form onSubmit={handleSubmit} className="w-full flex items-end gap-4">
        <Box className="flex flex-col gap-2">
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            label="Add a Task"
            variant="standard"
          />
        </Box>
        <Button type="submit" variant="outlined">
          ADD
        </Button>
      </form>
    </Box>
  );
};

export default AddTodo;
