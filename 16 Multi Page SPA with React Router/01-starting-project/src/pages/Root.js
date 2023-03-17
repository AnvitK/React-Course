import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      {/* <h1>Root Layout</h1> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
