import { Button } from "@mui/material";
import { useRouter } from "next/router";

export const UpdateButton = () => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push("/");
  };
  return (
    <Button variant="outlined" onClick={handleUpdate}>
      更新
    </Button>
  );
};
