import { db } from "@/lib/firebase";
import { Button } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export const ListEditButton = ({ selectedId }: { selectedId: string }) => {
  const router = useRouter();
  const handleEdit = async () => {
    const docRef = doc(db, "todos", selectedId);
    const docSnap = await getDoc(docRef);
    const queryData = { ...docSnap.data(), id: selectedId };
    router.push({
      pathname: "/edit",
      query: queryData,
    });
  };
  return (
    <Button variant="outlined" onClick={handleEdit}>
      編集
    </Button>
  );
};
