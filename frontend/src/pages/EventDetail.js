import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
      <Link to="/events">Back to Events</Link>
    </>
  );
};

export default EventDetailPage;


//useParams hook gives us access to the parameters of the current route, so to the values of the dynamic segments of the URL.