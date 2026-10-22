import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>projetECom</p>
      </footer>
    </>
  );
}

export default Layout;
