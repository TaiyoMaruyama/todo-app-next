import "../styles/Home.module.css";
import { Layout } from "@/components/Layout";
import { useAuth } from "./states/useAuth";
import SignInPage from "@/components/SignInPage";
import { TodoList } from "@/components/TodoList";

const Home = () => {
  const user = useAuth();

  return (
    <>
      <Layout>{!user ? <TodoList /> : <SignInPage />} </Layout>
    </>
  );
};

export default Home;
