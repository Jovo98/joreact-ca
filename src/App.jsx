import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Products } from "./routes/Products";
import { SpecificProduct } from "./routes/SpecificProduct";
import {CheckoutPage} from "./routes/CheckoutPage.jsx";
import {CheckoutSuccessPage} from "./routes/CheckoutSuccessPage.jsx";
import {ContactPage} from "./routes/ContactPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", element: <Products />,
      },
      {
        path: "products", element: <Products />
      },
      {
        path: "product/:id",
        element: <SpecificProduct />,
      },
      {
        path: "checkout", element: <CheckoutPage />
      },
      {
        path: "checkout-success", element: <CheckoutSuccessPage />
      },
      {
        path: "contact-us", element: <ContactPage />
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
