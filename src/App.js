import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <RouterProvider router ={route}></RouterProvider>
       <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
