import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact/Contact";
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo";

function Layout() {
  return (
    <div className="bg-[#272727] text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/blog", element: <Blog /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/userInfo/:id", element: <UserInfo /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
