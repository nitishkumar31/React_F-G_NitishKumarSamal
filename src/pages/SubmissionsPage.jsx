import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);

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

  return (
    <div className="mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Submissions</h1>
      {submissions.length > 0 ? (
        <>
          <div className="flex justify-between px-4">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer mb-4"
              onClick={handleDeleteSelected}
              disabled={selectedSubmissions.length === 0}
            >
              Delete Selected
            </button>
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 h-10 px-4 rounded w-fit"
            >
              Add New
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="relative min-w-full bg-white border table-auto-4">
              <thead className="sticky bg-slate-300">
                <tr>
                  <th className="py-2 border">Select</th>
                  <th className="py-2 border">Customer Name</th>
                  <th className="py-2 border">Email</th>
                  <th className="py-2 border">Phone</th>
                  <th className="py-2 border">Service Quality</th>
                  <th className="py-2 border">Beverage Quality</th>
                  <th className="py-2 border">Cleanliness</th>
                  <th className="py-2 border">Overall Experience</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={index}>
                    <td className="py-2 border">
                      <input
                        type="checkbox"
                        checked={selectedSubmissions.includes(index)}
                        onChange={() => handleSelectSubmission(index)}
                      />
                    </td>
                    <td className="py-2 border">{submission.customerName}</td>
                    <td className="py-2 border">{submission.email}</td>
                    <td className="py-2 border">{submission.phone}</td>
                    <td className="py-2 border">{submission.serviceQuality}</td>
                    <td className="py-2 border">
                      {submission.beverageQuality}
                    </td>
                    <td className="py-2 border">{submission.cleanliness}</td>
                    <td className="py-2 border">
                      {submission.overallExperience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>No submissions found</p>
      )}
    </div>
  );
};

export default Submissions;
