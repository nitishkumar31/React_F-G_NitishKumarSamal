import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackFormPage from "./pages/FeedbackFormPage";
import SubmissionsPage from "./pages/SubmissionsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackFormPage />} />
        <Route path="/submissions" element={<SubmissionsPage />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-red-500 mt-10">404 - Not Found</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
