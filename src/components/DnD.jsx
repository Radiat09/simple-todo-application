import { useEffect, useState } from "react";
import Todo from "./Todo";
import { useDrop } from "react-dnd";

const todolist = [
  {
    id: 1,
    url: "https://i.ibb.co/5jQjGfZ/solo-lebelling.webp",
  },
  {
    id: 2,
    url: "https://i.ibb.co/k2F0mnR/desktop-wallpaper-zanpakuto-bleach-bankai-manga-anime-zangetsu-quincy-tensa-zangetsu-ichigo-kurosaki.jpg",
  },
  {
    id: 3,
    url: "https://i.ibb.co/h1pnkVx/Radiat-Hossain-Ridoy.jpg",
  },
];
const DnD = () => {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    fetch("/todos.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addImageToboard(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToboard = (id) => {
    const todoList = todolist.filter((todo) => id === todo.id);
    setBoard((board) => [...board, todoList[0]]);
    // setBoard(todoList);
  };
  return (
    <>
      <div className="flex gap-3 justify-center">
        {todolist?.map((todo) => (
          <Todo todo={todo} key={todo?.id} />
        ))}
      </div>
      <div ref={drop} className="border ml-2 w-80 h-[700px]">
        {board?.map((todo) => (
          <Todo todo={todo} key={todo?.id} />
        ))}
      </div>
    </>
  );
};

export default DnD;
