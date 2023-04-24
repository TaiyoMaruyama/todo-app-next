import { useRouter } from "next/router";
import { Button } from "@mui/material";

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <Button variant="outlined" onClick={handleBack}>
      戻る
    </Button>
  );
};
