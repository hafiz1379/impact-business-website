import { useRoutes } from "react-router-dom";
import { routing } from "./Route";

function App() {
  let router = useRoutes(routing);
  return router;
}

export default App;
