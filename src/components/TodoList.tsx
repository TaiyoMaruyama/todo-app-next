import { ListEditButton } from "@/components/commomParts/ListEditButton";
import { ListDeleteButton } from "@/components/commomParts/ListDeleteButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CreateButton } from "./commomParts/createButton";

export type Todo = {
  id: string;
  title: string;
  detail: string;
  priority: string;
  create: string;
};

export const TodoList: React.FC = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDetail = () => {
    router.push("/detail");
  };

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title,
            detail: doc.data().detail,
            priority: doc.data().priority,
            create: doc.data().create,
          };
        })
      );
    });
  }, [setTodos]);

  return (
    <>
      <CreateButton />
      <table className="todo-list-table">
        <tbody>
          <tr>
            <th className="list-title">TODO</th>
            <th className="list-priority">PRIORITY</th>
            <th className="list-buttons">SELECT ACTION</th>
          </tr>
          {!todos ? (
            <p>Loading...</p>
          ) : (
            todos.map((todo: Todo) => (
              <tr key={todo.id}>
                <td className="todo-title" onClick={handleDetail}>
                  {todo.title}
                </td>
                <td className="todo-priority">{todo.priority}</td>
                <td className="todo-buttons">
                  <ListEditButton selectedId={todo.id} />
                  <ListDeleteButton selectedId={todo.id} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
