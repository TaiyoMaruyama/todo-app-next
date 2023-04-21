import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="children-layout">{children}</div>
    </>
  );
};
