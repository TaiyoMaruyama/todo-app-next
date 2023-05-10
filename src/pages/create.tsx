import { Layout } from "@/components/Layout";
import { Create } from "@/components/Create";
import SignInPage from "@/components/SignInPage";
import { useAuth } from "./states/useAuth";

const CreatePage = () => {
  const user = useAuth();

  return (
    <>
      <Layout>{user.uid === "" ? <SignInPage /> : <Create />}</Layout>
    </>
  );
};

export default CreatePage;
