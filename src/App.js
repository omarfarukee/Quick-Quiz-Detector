
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Main from './layout/Main';
import {Link} from 'react-router-dom'
import Quiz from './components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/', element:<Home></Home>},
      {
        path:'/home',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>
    },
      {path:'/statistic',},
      {path:'/blog', },
      {
        path:'/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Quiz></Quiz>
      },
      {path:'',}
      
    ]},
    {path:'*' , element: <h1 className='md:text-5xl text-center mt-9'>The page is not found 404 <Link className='border-b' to='/home'>check this</Link></h1>}
  ])
  return (
    <div className="">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
