import DnD from "./components/DnD";
import AddTodo from "./components/AddTodo";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="mt-20">
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}
      >
        {/* Rendering Add todo component to add new task */}
        <AddTodo />
      </Box>

      {/* Rendering Task List with Drag and drop functionality */}
      <DnD />
    </div>
  );
}

export default App;
