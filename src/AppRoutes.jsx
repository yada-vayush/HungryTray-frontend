import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import HomePage from "./page/HomePage";
import UserProfileForm from "./form/user-profile-form/UserProfileForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfileForm />
          </Layout>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <span>
            <SignUp />
          </span>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reset-password" element={<span>Reset password</span>} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
export default AppRoutes;
