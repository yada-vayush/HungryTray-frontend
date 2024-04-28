import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import HomePage from "./page/HomePage";
import UserProfileForm from "./form/user-profile-form/UserProfileForm";
import ManageRestaurant from "./page/ManageRestaurant";
import ProtectRoute from "./api/ProtectRoute";

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
      <Route element={<ProtectRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfileForm />
            </Layout>
          }
        ></Route>
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurant />
            </Layout>
          }
        ></Route>
      </Route>
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
