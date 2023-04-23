import { useState } from "react";
import { CreateButton } from "./commomParts/createButton";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/router";

export const Create = () => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState("");
  const [newDetail, setNewDetail] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const newtitleChange = (e: ReactEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };
  const newDetailChange = (e: ReactEvent<HTMLTextAreaElement>) => {
    setNewDetail(e.target.value);
  };
  const newPriorityChange = (priority: string) => {
    setNewPriority(priority);
  };

  const handleCreateNewTodo = async () => {
    const docRef = collection(db, "todos");
    const payload = {
      priority: newPriority,
      title: newTitle,
      detail: newDetail,
      create: new Date(),
    };
    await addDoc(docRef, payload);
    router.push("/");
  };

  return (
    <div className="create-frame">
      <input
        type="text"
        className="create-input"
        value={newTitle}
        onChange={newtitleChange}
      />
      <textarea
        cols={30}
        rows={20}
        className="create-textarea"
        value={newDetail}
        onChange={newDetailChange}
      ></textarea>
      <div className="create-page-bottom">
        <div className="radio-frame">
          {["High", "Middle", "Low"].map((priority) => (
            <label key={priority} className="radio">
              <input
                type="radio"
                name="selectedPriority"
                value={newPriority}
                onChange={() => newPriorityChange(priority)}
              />
              {priority}
            </label>
          ))}
        </div>

        <div onClick={handleCreateNewTodo}>
          <CreateButton />
        </div>
      </div>
    </div>
  );
};
