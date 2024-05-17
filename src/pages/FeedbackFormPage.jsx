import { Link } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";

const FeedbackFormPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 bg-slate-50 rounded-lg">
      <div className="flex justify-end">
        <Link
          to="/submissions"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-fit"
        >
          View All Submissions
        </Link>
      </div>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackFormPage;
