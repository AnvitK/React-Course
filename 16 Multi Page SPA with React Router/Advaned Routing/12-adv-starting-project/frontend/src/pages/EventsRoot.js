import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      {/* <h1>Root Layout</h1> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventRootLayout;