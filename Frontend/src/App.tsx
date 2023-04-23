import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UserPLaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Login from "./users/components/Login";
import UserList from "./users/components/userList";
import Users from "./users/pages/Users";

const AppLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Users /> },
        { path: "/:userId/places", element: <UserPLaces /> },
        {
          path: "/newplace",
          element: <NewPlace />,
        },
        // {
        //   path: "/list",
        //   element: <UserList />,
        // },
      ],
    },
  ]
  //   createRoutesFromElements(
  //     <Route path="/" element={<Users />}>
  //       <Route path="/newplace" element={<NewPlace />} />
  //     </Route>
  //   )
);

const App = () => {
  return <RouterProvider router={router} />;
  // return <Login />;
};

export default App;
