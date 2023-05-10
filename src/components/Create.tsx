import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/router";
import { BackButton } from "./commonParts/BackButton";
import { Alert, Button } from "@mui/material";

export const Create = () => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState("");
  const [newDetail, setNewDetail] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [dialogState, setDialogState] = useState(false);

  const newTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };
  const newDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDetail(e.target.value);
  };
  const newPriorityChange = (priority: string) => {
    setNewPriority(priority);
  };

  const EmptyCheck = () => {
    [newTitle, newDetail, newPriority].filter(
      (content) => content.trim() !== ""
    ).length == 3
      ? handleCreateNewTodo()
      : DialogAction();
  };

  const DialogAction = () => {
    setDialogState(true);
    setTimeout(() => {
      setDialogState(false);
    }, 3000);
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
      <BackButton />
      <input
        type="text"
        className="create-input"
        value={newTitle}
        onChange={newTitleChange}
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
        <div className="create-button">
          <Button variant="outlined" onClick={EmptyCheck}>
            新規作成
          </Button>
        </div>
      </div>
      {dialogState && (
        <div className="toast">
          <Alert severity="error">未記入の部分があります。</Alert>
        </div>
      )}
    </div>
  );
};
