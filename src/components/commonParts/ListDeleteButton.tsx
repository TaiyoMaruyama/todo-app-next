import { db } from "@/lib/firebase";
import { Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";

export const ListDeleteButton = ({ selectedId }: { selectedId: string }) => {
  const handleDelate = async () => {
    await deleteDoc(doc(db, "todos", selectedId));
  };
  return (
    <Button variant="outlined" color="error" onClick={handleDelate}>
      削除
    </Button>
  );
};
