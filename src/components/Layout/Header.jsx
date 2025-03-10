import { Link } from "react-router-dom";

export function Header() {
  return (
      <>
        <header className="flex justify-between p-2 max-w-6xl w-full mx-auto text-lg  bg-white  border-b-1 border-gray-200">
          <Link to={"/"} className={"cursor-pointer text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6"}>
            eCom store
          </Link>
          <nav className="flex gap-2">
            <Link
                to={"/checkout"}
                className="text-lg cursor-pointer text-blue-600"
            >
              <p className={"font-bold"}>Cart</p>
            </Link>
          </nav>
        </header>
      </>
  );
}
