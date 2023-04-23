import { Button } from "@mui/material";
import { useRouter } from "next/router";

export const CreateButton = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/create");
  };
  return (
    <Button variant="outlined" onClick={handleCreate}>
      新規作成
    </Button>
  );
};
