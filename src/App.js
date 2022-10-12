
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import {Link} from 'react-router-dom'
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Statistic from './components/statistic/Statistic';
import House from './components/House/House';






function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children: [
      {path:'/',element:<House></House>},

      {path:'/home', loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
       element:<House></House>},
      {path:'/statistic',element:<Statistic></Statistic>},
      {path:'/blog',element:<Blog></Blog>},
      {
        path:'/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Quiz></Quiz>
      },
      
    ]},
    {path:'/about' , element: <h1 className='md:text-5xl text-center mt-9 text-white'>The page is not found 404 <Link className='border-b' to='/home'>check this</Link></h1>}
  ])
  return (
    <div className="">
        <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
