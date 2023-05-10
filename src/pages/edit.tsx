import { Edit } from "@/components/Edit";
import { Layout } from "@/components/Layout";
import { useAuth } from "./states/useAuth";
import SignInPage from "@/components/SignInPage";

const EditPage = () => {
  const user = useAuth();

  return (
    <>
      <Layout>{user.uid === "" ? <SignInPage /> : <Edit />}</Layout>
    </>
  );
};

export default EditPage;
