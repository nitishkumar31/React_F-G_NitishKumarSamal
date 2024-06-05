import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormDetails from "../components/FormDetails";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);
  const [showFormDetails, setShowFormDetails] = useState(false);
  const [formDetails, setFormDetails] = useState({});

  useEffect(() => {
    const storedSubmissions =
      JSON.parse(localStorage.getItem("feedback")) || [];
    setSubmissions(storedSubmissions);
  }, []);

  const handleSelectSubmission = (index) => {
    if (selectedSubmissions.includes(index)) {
      setSelectedSubmissions(selectedSubmissions.filter((i) => i !== index));
    } else {
      setSelectedSubmissions([...selectedSubmissions, index]);
    }
  };

  const handleDeleteSelected = () => {
    const newSubmissions = submissions.filter(
      (_, index) => !selectedSubmissions.includes(index)
    );
    setSubmissions(newSubmissions);
    localStorage.setItem("feedback", JSON.stringify(newSubmissions));
    setSelectedSubmissions([]);
  };

  const handleFormDetailsButton = (submissionData) => {
    setFormDetails(submissionData);
    setShowFormDetails(true);
  };

  return (
    <div className="m-2 p-3 bg-slate-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-3 text-center bg-white">
        Submissions
      </h1>
      {submissions.length > 0 ? (
        <>
          <div className="flex justify-between gap-2 items-center py-2 px-4 bg-white">
            <h2 className="text-2xl font-bold">Feedback List</h2>
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded w-fit whitespace-nowrap"
            >
              Add New
            </Link>
          </div>

          {/* Submission Table */}
          <div className="table-wrapper rounded-md border border-slate-300 overflow-auto">
            <div className="table-container h-auto max-h-[calc(100vh-220px)]">
              <table className="relative w-full mx-auto bg-white">
                <thead className="sticky top-[-1px] bg-purple-200">
                  <tr>
                    <th
                      title="Select All"
                      className="py-3 px-4 whitespace-nowrap text-center"
                    >
                      <input
                        type="checkbox"
                        className="accent-purple-500 cursor-pointer"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSubmissions(
                              submissions.map((_, index) => index)
                            );
                          } else {
                            setSelectedSubmissions([]);
                          }
                        }}
                      />
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap text-left">
                      Form Details
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap text-left">
                      Customer Name
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap text-left">
                      Email
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap text-left">
                      Phone
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap">
                      Please rate the quality of the service you received from
                      your host.
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap">
                      Please rate the quality of your beverage.
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap">
                      Was our restaurant clean?
                    </th>
                    <th className="py-3 px-5 whitespace-nowrap">
                      Please rate your overall dining experience.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission, index) => (
                    <tr
                      key={index}
                      className="transition-all duration-150 hover:bg-purple-100 even:bg-gray-50"
                    >
                      <td className="py-2 text-center">
                        <input
                          title="Select"
                          className="accent-purple-500 cursor-pointer"
                          type="checkbox"
                          checked={selectedSubmissions.includes(index)}
                          onChange={() => handleSelectSubmission(index)}
                        />
                      </td>
                      <td className="py-2 px-5">
                        <button
                          onClick={() => handleFormDetailsButton(submission)}
                          className="text-blue-500 hover:underline"
                        >
                          View Details
                        </button>
                      </td>
                      <td className="py-2 px-5 flex items-center whitespace-nowrap">
                        <div
                          className="mr-2 border text-white rounded-full w-6 h-6 flex items-center justify-center"
                          style={{
                            backgroundImage:
                              "linear-gradient(to bottom right, #00C0FF, #4218B8)",
                          }}
                        >
                          {submission.customerName[0].toUpperCase()}
                        </div>
                        {submission.customerName}
                      </td>
                      <td className="py-2 px-5">{submission.email}</td>
                      <td className="py-2 px-5">{submission.phone}</td>
                      <td className="py-2 px-5">{submission.serviceQuality}</td>
                      <td className="py-2 px-5">
                        {submission.beverageQuality}
                      </td>
                      <td className="py-2 px-5">{submission.cleanliness}</td>
                      <td className="py-2 px-5">
                        {submission.overallExperience}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Form Details Modal */}
          <FormDetails
            submission={formDetails}
            showFormDetails={showFormDetails}
            setShowFormDetails={setShowFormDetails}
          />

          {/* Delete Button */}
          <div className="mt-3 px-3 flex justify-end">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer"
              onClick={handleDeleteSelected}
              disabled={selectedSubmissions.length === 0}
            >
              Delete Selected
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-6">
          <p>No submissions found</p>
          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 h-10 px-4 mx-auto rounded w-fit"
          >
            Add New
          </Link>
        </div>
      )}
    </div>
  );
};

export default Submissions;
