import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./Pages/Home/Home";
import BottomNavigationBar from "./components/BNavbar/BottomNavigationBar";
import ChangePassword from "./components/ForgotPassword/ChangePassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import VerifyEmail from "./components/ForgotPassword/VerifyEmail";
import UpdatedPassword from "./components/ForgotPassword/UpdatedPassword";
import VerifyOtp from "./components/ForgotPassword/VerifyOtp";
import Otp from "./components/OtpSignIn/Otp";
import OtpSignIn from "./components/OtpSignIn/OtpSignIn";
import PublicRoute from "./Routes/PublicRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { AuthProvider } from "./Routes/AuthContext";
import Privacy from "./Pages/Additional/Privacy";
import Terms from "./Pages/Additional/Terms";
import Booking from "./Pages/Booking/Booking";
import BookingDetails from "./Pages/Booking/BookingDetails";
import BookingOtp from "./Pages/Booking/BookingOtp";
import BookingDetailsComplete from "./Pages/Booking/BookingDetailsComplete";
import Contact from "./Pages/Contact/Contact";
import AddProfile from "./Pages/Profile/AddProfile";
import Profile from "./Pages/Profile/Profile";
import Report from "./Pages/Report/Report";
import Setting from "./Pages/Setting/Setting";
import Wallet from "./Pages/Wallet/Wallet";
import WithDrawFunds from "./Pages/Wallet/WithDrawFunds";
import WithDrawFundsScreen from "./Pages/Wallet/WithDrawFundsScreen";
import PayoutHistory from "./Pages/Wallet/PayoutHistory";
import TransactionHistory from "./Pages/Wallet/TransactionHistory";
import CompletedBookings from "./Pages/Booking/CompletedBookings";
import UpcomingBookings from "./Pages/Booking/UpcomingBookings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/UpdatedPassword" element={<UpdatedPassword />} />
              <Route path="/VerifyEmail" element={<VerifyEmail />} />
              <Route path="/VerifyOtp" element={<VerifyOtp />} />
              <Route path="/Otp" element={<Otp />} />
              <Route path="/OtpSignIn" element={<OtpSignIn />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Terms" element={<Terms />} />
              <Route path="/Booking" element={<Booking />} />
              <Route
                path="/BookingDetails/:userId"
                element={<BookingDetails />}
              />
              <Route path="/BookingOtp" element={<BookingOtp />} />
              <Route
                path="/BookingDetailsComplete/:userId"
                element={<BookingDetailsComplete />}
              />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AddProfile" element={<AddProfile />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/ChangePassword" element={<ChangePassword />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Wallet" element={<Wallet />} />
              <Route path="/WithDrawFunds" element={<WithDrawFunds />} />
              <Route
                path="/WithDrawFundsScreen"
                element={<WithDrawFundsScreen />}
              />
              <Route path="/PayoutHistory" element={<PayoutHistory />} />
              <Route
                path="/TransactionHistory"
                element={<TransactionHistory />}
              />

              <Route path="Profile" element={<Profile />} />
              <Route
                path="/CompletedBookings"
                element={<CompletedBookings />}
              />

              <Route path="/UpcomingBookings" element={<UpcomingBookings />} />
            </Route>
          </Routes>
          <BottomNavigationBar />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
