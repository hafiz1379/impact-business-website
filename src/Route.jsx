import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export let routing = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Services", element: <Services /> },
  { path: "/Portfolio", element: <Portfolio /> },
  { path: "/Team", element: <Team /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/Contact", element: <Contact /> },
];
