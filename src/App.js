import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom';
import './App.css';
import Root from './Pages/Root';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='dashboard' element={<Dashboard />}/>

    </Route>
  )
)
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
