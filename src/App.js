import { useRoutes } from 'react-router-dom';
import routing from './Route';

function App() {
  const router = useRoutes(routing);
  return router;
}

export default App;
