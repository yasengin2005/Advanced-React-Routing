import { Outlet } from "react-router-dom"; //{useNavigation, Outlet} are imported from react-router-dom

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // const navigation= useNavigation();
  // useNavigation is a hook that returns the current navigation state. It is used in the RootLayout component to check if the navigation state is loading. If it is loading, the component will render a loading message. Otherwise, it will render the content of the current route.


  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;


//Outlet is a special component that is used to render the content of the current route. It is used in the RootLayout component to render the content of the current route. The content of the current route is defined in the App.js file.
// after assign this Outlet component, we can move other paths and elements directly inside the  children elements of RootLayout in the App.js file.

