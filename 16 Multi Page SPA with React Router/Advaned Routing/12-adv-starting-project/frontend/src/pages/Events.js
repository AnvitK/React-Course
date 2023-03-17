// import { Link } from "react-router-dom";

// const EVENTS = [
//   { id: "e1", title: "Event 1" },
//   { id: "e2", title: "Event 2" },
//   { id: "e3", title: "Event 3" },
// ];

// const EventsPage = () => {
//   return (
//     <>
//       <h1>The Events Page</h1>
//       <ul>
//         {EVENTS.map((event) => {
//           return (
//             <li key={event.id}>
//               <Link to={event.id} relative="">{event.title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default EventsPage;

// import { useEffect, useState } from 'react';

// function EventsPage() {
// const [isLoading, setIsLoading] = useState(false);
// const [fetchedEvents, setFetchedEvents] = useState();
// const [error, setError] = useState();

// useEffect(() => {
//   async function fetchEvents() {
//     setIsLoading(true);
//     // const response = await fetch('http://localhost:8000/events');

//     // if (!response.ok) {
//     //   setError('Fetching events failed.');
//     // } else {
//     //   const resData = await response.json();
//     //   setFetchedEvents(resData.events);
//     // }
//     setIsLoading(false);
//   }

//   fetchEvents();
// }, []);

// const events = useLoaderData();
// const data = useLoaderData();
// const events = data.events;

// if (data.isError) {
//   return <p>{data.message}</p>
// }

//   // return (
//     <>
//       {/* <div style={{ textAlign: 'center' }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div> */}
//       {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
//       {/* <EventsList events={events} /> */}
//       {/* <EventsList /> */}
//     </>
//   // );
// // }

import { Suspense } from "react";
import { defer, json, useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

// function EventsPage() {
//   const data = useLoaderData();
//   const events = data.events;

//   // if (data.isError) {
//   //   return <p>{data.message}</p>
//   // }

//   return <EventsList events={events} />;
// }

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events!!" }
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events!!" }),
    //   { status: 500 }
    // );
    return json({ message: "Could not fetch events!!" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
