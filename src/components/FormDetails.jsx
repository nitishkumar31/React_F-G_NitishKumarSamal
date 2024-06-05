import PropTypes from "prop-types";

const FormDetails = ({ showFormDetails, setShowFormDetails, submission }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          showFormDetails ? "visible" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-opacity-50 transition-all duration-300 overflow-y-auto ${
          showFormDetails ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-16 sm:mt-0">
          <div>
            <h2 className="text-3xl sm:text-2xl font-semibold mb-4">Customer Details</h2>
            <table>
              <tbody>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Customer Name
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.customerName}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Email
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.email}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Phone
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.phone}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Please rate the quality of the service you received from
                    your host.
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.serviceQuality}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Please rate the quality of your beverage.
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.beverageQuality}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Was our restaurant clean?
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.cleanliness}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 bg-purple-100 text-start border border-slate-300">
                    Please rate your overall dining experience.
                  </th>
                  <td className="py-2 px-4 text-start border border-slate-300">
                    {submission.overallExperience}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={() => setShowFormDetails(false)}
            className="bg-purple-500 text-white mt-6 py-2 px-8 rounded hover:bg-purple-700 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

FormDetails.propTypes = {
  showFormDetails: PropTypes.bool.isRequired,
  setShowFormDetails: PropTypes.func.isRequired,
  submission: PropTypes.object.isRequired,
};

export default FormDetails;
