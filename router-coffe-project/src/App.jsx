
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";


import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import Review from './pages/review/Review';
import Error from "./pages/error/Error";
import Mainlayout from './layouts/Mainlayout';




const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      <Route element={<Mainlayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>  
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/review' element={<Review/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </>
    
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
