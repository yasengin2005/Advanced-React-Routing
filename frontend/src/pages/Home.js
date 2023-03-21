import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  
  const navigateHandler = () => {
    navigate("events");
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
