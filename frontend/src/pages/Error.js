import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error.status);

  let title = "An error occurred!";
  let message = "Something went wrong!!";

  if (error.status === 500) {
    message = error.data.message;
  }
  //500 error code occurs when the server is not running or the server is not responding to the request. In this case, the error message is set to the message property of the error object.(Events.js/response failure)

  if (error.status === 404) {
    title = "Page not found!";
    message = "Could not find the page you were looking for.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
