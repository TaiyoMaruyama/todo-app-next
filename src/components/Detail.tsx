import { useRouter } from "next/router";
import { BackButton } from "./commomParts/BackButton";

export const Detail = () => {
  const router = useRouter();
  const getData = router.query;

  return (
    <>
      <BackButton />
      <p className="detail-page-title">{getData.title}</p>
      <p className="detail-page-detail">{getData.detail}</p>
      <p className="detail-page-priority">優先順位：{getData.priority}</p>
    </>
  );
};
