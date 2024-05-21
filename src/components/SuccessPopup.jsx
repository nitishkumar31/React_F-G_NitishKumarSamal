import PropTypes from "prop-types";

const SuccessPopup = ({ showSuccessMessage, setShowSuccessMessage }) => {
  return (
    <>
      {/* with animation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          showSuccessMessage ? "visible" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-opacity-50 transition-all duration-300 ${
          showSuccessMessage ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className=" text-white mb-4 bg-green-600 w-fit rounded-full p-3 mx-auto">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Thank you for providing the feedback
          </h2>
          <p className="mb-4">We will work towards improving your experience</p>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="bg-purple-500 text-white mt-6 py-2 px-8 rounded hover:bg-purple-700 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>

      {/* Without animation */}
      {/* {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className=" text-white mb-4 bg-green-600 w-fit rounded-full p-3 mx-auto">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Thank you for providing the feedback
            </h2>
            <p className="mb-4">
              We will work towards improving your experience
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="bg-purple-500 text-white mt-6 py-2 px-8 rounded hover:bg-purple-700 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

SuccessPopup.propTypes = {
  showSuccessMessage: PropTypes.bool.isRequired,
  setShowSuccessMessage: PropTypes.func.isRequired,
};

export default SuccessPopup;
