import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
