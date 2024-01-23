import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './components/MyRoutes';
import Registration from './components/Registration';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoutes />
        <Registration />
      </BrowserRouter>
    </>
  );
}

export default App;
