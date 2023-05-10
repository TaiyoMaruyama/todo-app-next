import { ListEditButton } from "@/components/commonParts/ListEditButton";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Todo } from "./commonParts/TodoType";
import { SearchArea } from "./SearchArea";

export const TodoList: React.FC = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({ id: "", title: "" });
  const [dialogState, setDialogState] = useState(false);

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

  const handleDelateCheck = (id: string, title: string) => {
    setShowDialog(true);
    setDeleteInfo({ id: id, title: title });
  };

  const handleDelate = async (selectedId: string) => {
    await deleteDoc(doc(db, "todos", selectedId));
    setShowDialog(false);
    setDeleteInfo({ id: "", title: "" });
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
            <tr key={todo.id} className="todo-tr">
              <td className="todo-title" onClick={() => handleDetail(todo.id)}>
                {todo.title}
              </td>
              <td className="todo-priority">{todo.priority}</td>
              <td className="todo-buttons">
                <ListEditButton selectedId={todo.id} />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelateCheck(todo.id, todo.title)}
                >
                  削除
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDialog ? (
        <div className="dialog">
          <div className="dialog-frame">
            <p className="dialog-title">{deleteInfo.title}</p>
            <p>というTODOを削除してもよろしいですか</p>
            <div className="dialog-button-frame">
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelate(deleteInfo.id)}
              >
                はい
              </Button>
              <Button variant="outlined" onClick={() => setShowDialog(false)}>
                いいえ
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      {dialogState && (
        <div className="toast">
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>該当のTODOは削除されました。</strong>
          </Alert>
        </div>
      )}
    </>
  );
};
