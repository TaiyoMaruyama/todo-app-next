import { db } from "@/lib/firebase";
import { Button } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export const ListEditButton = ({ selectedId }: { selectedId: string }) => {
  const router = useRouter();
  const handleEdit = async () => {
    const docRef = doc(db, "todos", selectedId);
    const docSnap = await getDoc(docRef);
    router.push({
      pathname: "/edit",
      query: docSnap.data(),
    });
  };
  return (
    <Button variant="outlined" onClick={handleEdit}>
      編集
    </Button>
  );
};
