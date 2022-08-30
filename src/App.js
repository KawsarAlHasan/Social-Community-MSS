import { useSelector } from "react-redux/es/exports";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./pages/Admin.ja/Users";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="users"
          element={user ? <Users /> : <Navigate to="../auth" />}
        />
        {/* <Route path="/setting" element={<Setting>
          <Routes>
            <Route path="/link1" element={<Users></Users>}></Route>
            <Route path="/link2" element={<Admins></Admins>}></Route>
          </Routes>
        </Setting>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
