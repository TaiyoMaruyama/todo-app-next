import "../styles/Home.module.css";
import { Layout } from "@/components/Layout";
import { useAuth } from "./states/useAuth";
import SignInPage from "@/components/SignInPage";
import { TodoList } from "@/components/TodoList";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

const Home: React.FC = () => {
  const user = useAuth();

  return (
    <>
      <Layout>{user.uid === "" ? <SignInPage /> : <TodoList />}</Layout>
    </>
  );
};

export default Home;
