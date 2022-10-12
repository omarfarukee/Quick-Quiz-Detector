
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Statistic from './components/statistic/Statistic';
import House from './components/House/House';
import About from './components/About/About';






function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
     errorElement:<About></About>,
      children: [
      {
        path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<House></House>},

      {
        path:'/home', loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<House></House>
      },
      {
        path:'/statistic',
        element:<Statistic></Statistic>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Quiz></Quiz>
      }
    ]}
  ])
  return (
    <div className="">
        <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
