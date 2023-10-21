import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import ViewUser from "./pages/ViewUser";

import { loader as allUserLoader } from "./pages/ViewUser";
import { loader as editUser } from "./pages/EditUser";
import EditUser from "./pages/EditUser";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        queryClient: { queryClient },
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "viewuser",
            element: <ViewUser />,
            loader: allUserLoader(queryClient),
          },
          {
            path: "edit-job/:id",
            element: <EditUser />,
            loader: editUser(queryClient),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
