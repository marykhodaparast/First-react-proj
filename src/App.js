import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
function App() {
  //localhost:3000/{path}
  //my-site.com
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />}/>
          <Route path="/new-meetup" element={<NewMeetupPage />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
export default App;
