import "../styles/Home.module.css";
import { Layout } from "@/components/Layout";
import SoignInState from "./signupState";

export default function Home() {
  return (
    <>
      <Layout>
        <SoignInState />
      </Layout>
    </>
  );
}
