import { Layout } from "@/components/Layout";
import { Detail } from "@/components/Detail";
import SignInPage from "@/components/SignInPage";
import { useAuth } from "./states/useAuth";

const DetailPage: React.FC = () => {
  const user = useAuth();

  return (
    <>
      <Layout>{user.uid === "" ? <SignInPage /> : <Detail />}</Layout>
    </>
  );
};

export default DetailPage;
