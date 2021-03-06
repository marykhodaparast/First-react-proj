// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes } from "react-router-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
// import MainNavigatoin from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
//import { FavoritesContextProvider } from './store/favorite-contexts';
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    {/* <MainNavigatoin /> */}
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  rootElement
);
