import React from "react";
// eslint-disable-next-line
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
  
// } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/product/Product";
import Error from "./pages/Error/Error";
import RequireAuth from "./components/RequireAuth";
import AdminPanal from "./pages/AdminPanal/AdminPanal";
import Login from "./pages/Login/Login";
import Favourite from "./pages/Favourite/Favourite";
// eslint-disable-next-line
import FavouriteOrders from "./components/FavouriteOrders/FavouriteOrders";
import Navbar from "./components/Navbar/Navbar";
// eslint-disable-next-line
import { ScrollToTop } from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import CheckoutFavourites from "./pages/CheckoutFavourites/CheckoutFavourites";
import "./App.scss"
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import About from "./components/About/About";

const Layout = () => {
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/about",
        element: <About/>
      }
      ,
      {
        path: "/checkout_favourites",
        element: <CheckoutFavourites/>
      }
      ,
      {
        path: "/login",
        element: <Login/>
      },
      {
        // path:"/",
        element: <RequireAuth/>,
        children:[
          {
            path:"/admin_panal",
            element:<AdminPanal/>
          },
          {
            path:"/favourite/:id",
            element:<Favourite/>
          }
        ]
      },
      {
        path: "*",
        element: <Error/>
      }
    ]
  }

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}



// function App() {
//   return (
//     <div className="App">
//         <Router>
//           <Routes>
//             <Route element={<RequireAuth />}>
//                 {/* <Route element={<Home/>} path="/" exact/> */}
//                 <Route element={<AdminPanal/>} path="/admin_panal" exact/>
//             </Route>
//             <Route element={<Login/>} path="/login"/>
//           </Routes>
//       </Router>
//     </div>
//   );
// }
export default App;
