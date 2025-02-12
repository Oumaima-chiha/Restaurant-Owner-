import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import ReservationTable from "./components/Home/ReservationTable.jsx";
import "./App.css";
import RestaurantForm from "./components/addRestaurant/RestaurantForm";
import ReservationHistory from "./components/Home/ReservationHistory.jsx";
import Settings from "./components/Home/Settings.jsx";
import Images from "./components/Home/Images.jsx";
import Messages from "./components/Home/Messages.jsx";
import Reviews from "./components/Home/Reviews.jsx";
import EmailVerification from "./components/emailVerification/EmailVerification.jsx";

function App() {



  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/add-restaurant"
          element={<RestaurantForm />}
        />
        <Route
          path="/reservation-list"
          element={<ReservationTable />}
        />
        <Route
          path="/reservation-history"
          element={<ReservationHistory />}
        />
         <Route
          path="/Settings"
          element={<Settings />}
        />
           <Route
          path="/Images"
          element={<Images/>}
        />
             <Route
          path="/Messages"
          element={<Messages/>}
        />
              <Route
          path="/Reviews"
          element={<Reviews/>}
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/owners/verify/:token" element={<EmailVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-restaurant" element={<RestaurantForm />} />
        <Route path="/reservation-list" element={<ReservationTable />} />
        <Route path="/reservation-history" element={<ReservationHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
