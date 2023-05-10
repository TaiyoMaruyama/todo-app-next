import { useRouter } from "next/router";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { UpdateButton } from "./commonParts/updateButton";
import { BackButton } from "./commonParts/BackButton";

export const Edit: React.FC = () => {
  const router = useRouter();
  const getData = router.query;
  const [todo, setTodo] = useState(getData);
  console.log(getData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTodo((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prevForm) => ({ ...prevForm, priority: e.target.value }));
  };

  const handleUpdateTodo = async () => {
    if (getData.id !== undefined) {
      const selectedId = getData.id as string;
      const docRef = doc(db, "todos", selectedId);
      const payload = {
        priority: todo.priority,
        title: todo.title,
        detail: todo.detail,
      };
      await updateDoc(docRef, payload);
      router.push("/");
    }
  };

  return (
    <>
      <BackButton />
      <div className="create-frame">
        <input
          type="text"
          className="create-input"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
        <textarea
          cols={30}
          rows={20}
          className="create-textarea"
          name="detail"
          value={todo.detail}
          onChange={handleChange}
        ></textarea>
        <div className="create-page-bottom">
          <div className="radio-frame">
            {["High", "Middle", "Low"].map((priority) => (
              <label key={priority} className="radio">
                <input
                  type="radio"
                  name="priority"
                  value={priority}
                  checked={priority == todo.priority}
                  onChange={handlePriorityChange}
                />
                {priority}
              </label>
            ))}
          </div>

          <div onClick={handleUpdateTodo}>
            <UpdateButton />
          </div>
        </div>
      </div>
    </>
  );
};
