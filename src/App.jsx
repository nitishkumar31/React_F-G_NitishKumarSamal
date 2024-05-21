import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FeedbackFormPage from "./pages/FeedbackFormPage";
import SubmissionsPage from "./pages/SubmissionsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeedbackFormPage />,
  },
  {
    path: "/submissions",
    element: <SubmissionsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
