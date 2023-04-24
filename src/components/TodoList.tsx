import { ListEditButton } from "@/components/commomParts/ListEditButton";
import { ListDeleteButton } from "@/components/commomParts/ListDeleteButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Todo } from "./commomParts/TodoType";
import { SearchArea } from "./commomParts/SearchArea";

export const TodoList: React.FC = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [searchWord, setSearchWord] = useState("");

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
  }, []);

  const handleDetail = async (selectedId: string) => {
    const docRef = doc(db, "todos", selectedId);
    const docSnap = await getDoc(docRef);
    const queryData = { ...docSnap.data(), id: selectedId };
    router.push({
      pathname: "/detail",
      query: queryData,
    });
  };

  const handleSearch = (searchValue: string) => {
    setSearchWord(searchValue);
    setFilteredTodos(todos.filter((todo) => todo.title.includes(searchValue)));
  };

  return (
    <>
      <SearchArea handleSearch={handleSearch} />
      <table className="todo-list-table">
        <tbody>
          <tr>
            <th className="list-title">TODO</th>
            <th className="list-priority">PRIORITY</th>
            <th className="list-buttons">SELECT ACTION</th>
          </tr>
          {(!searchWord ? todos : filteredTodos).map((todo: Todo) => (
            <tr key={todo.id}>
              <td className="todo-title" onClick={() => handleDetail(todo.id)}>
                {todo.title}
              </td>
              <td className="todo-priority">{todo.priority}</td>
              <td className="todo-buttons">
                <ListEditButton selectedId={todo.id} />
                <ListDeleteButton selectedId={todo.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
