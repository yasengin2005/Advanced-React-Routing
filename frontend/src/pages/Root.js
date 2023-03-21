import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;


//Outlet is a special component that is used to render the content of the current route. It is used in the RootLayout component to render the content of the current route. The content of the current route is defined in the App.js file.
// after assign this Outlet component, we can move other paths and elements directly inside the  children elements of RootLayout in the App.js file.