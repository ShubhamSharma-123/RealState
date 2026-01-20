import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PropertyProvider } from "./contexts/PropertyContext";
import MainLayout from "./layout/MainLayout";
import { HomePage } from "./pages/Home";
import PropertiesPage  from "./pages/Properties";
import { PropertyDetailsPage } from "./pages/PropertyDetails";
import { AddPropertyPage } from "./pages/AddProperty";
import { ManagePropertiesPage } from "./pages/ManageProperties";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import  ProfilePage  from "./pages/ProfilePage";

const route = createBrowserRouter([
  {
    path: "/*",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "contact-us", element: <ContactUsPage /> },
      { path: "properties", element: <PropertiesPage />},
      { path: "property/:id", element: <PropertyDetailsPage /> },
      { path: "add-property", element: <AddPropertyPage /> },
      { path: "manage-properties", element: <ManagePropertiesPage /> }
    ]
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> }
]);

function App() {
  return (
    <AuthProvider>
      <PropertyProvider>
        <RouterProvider router={route} />
      </PropertyProvider>
    </AuthProvider>
  );
}

export default App;
