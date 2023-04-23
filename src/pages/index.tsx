import "../styles/Home.module.css";
import { Layout } from "@/components/Layout";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <Layout>
        <TodoList />
      </Layout>
    </>
  );
}
