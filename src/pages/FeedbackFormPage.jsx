import FeedbackForm from "../components/FeedbackForm";

const FeedbackFormPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 bg-slate-100 rounded-lg">
      <h1 className="text-3xl font-bold bg-white p-2 rounded">
        Restaurant Grievance Form
      </h1>
      <p className="bg-white p-2 rounded">
        {/* We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you. */}
        We are dedicated to offering you an exceptional dining experience and
        greatly value your feedback. Please take a moment to complete this
        questionnaire. Thank you for helping us serve you better.
      </p>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackFormPage;
