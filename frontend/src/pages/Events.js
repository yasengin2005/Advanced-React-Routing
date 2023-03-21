import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description: "This is a first event",
    location: "Somewhere",
    date: "2021-05-12",
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description: "This is a second event",
    location: "Somewhere else",
    date: "2021-05-30",
  },
];
const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
