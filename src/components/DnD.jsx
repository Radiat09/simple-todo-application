/* eslint-disable */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Section from "./Section";
import { Box } from "@mui/material";

//main Component
const DnD = () => {
  //get All tasks data
  const todos = useSelector((state) => state?.todosReducer?.todos);

  //filtering tasks containing status todo
  const statusTodo = useMemo(() => {
    return todos.filter((todo) => todo.status === "todo");
  }, [todos]);

  //filtering tasks containing status ongoing
  const statusOngoing = useMemo(() => {
    return todos.filter((todo) => todo.status === "ongoing");
  }, [todos]);

  //filtering tasks containing status done
  const statusDone = useMemo(() => {
    return todos.filter((todo) => todo.status === "done");
  }, [todos]);

  //declearing all status in an array
  const allStatus = ["todo", "ongoing", "done"];

  return (
    <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl xl:mx-auto mx-2">
      {allStatus.map((status) => (
        <Section
          key={status}
          status={status}
          statusTodo={statusTodo}
          statusOngoing={statusOngoing}
          statusDone={statusDone}
        />
      ))}
    </Box>
  );
};

export default DnD;
