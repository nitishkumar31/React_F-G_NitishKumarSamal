import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const FeedbackForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const initialValues = {
    customerName: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    overallExperience: "",
  };

  const validationSchema = Yup.object({
    customerName: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    phone: Yup.string()
      .required("Please enter your phone number")
      .test(
        "isValidPhoneNumber",
        "Please enter a valid phone number",
        (value) => {
          const phoneNumber = parsePhoneNumberFromString(value || "");
          return phoneNumber ? phoneNumber.isValid() : false;
        }
      ),
    serviceQuality: Yup.string().required("This field is required"),
    beverageQuality: Yup.string().required("This field is required"),
    cleanliness: Yup.string().required("This field is required"),
    overallExperience: Yup.string().required("This field is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const submissions = JSON.parse(localStorage.getItem("feedback")) || [];
    localStorage.setItem("feedback", JSON.stringify([...submissions, values]));
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
    resetForm();
  };

  return (
    <>
      <h1 className="text-3xl font-bold bg-white p-2 rounded">Aromatic Bar</h1>
      <p className="bg-white p-2 rounded mb-10">
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values, errors, touched, setFieldTouched }) => (
          <Form className="flex flex-col gap-6 bg-white py-2 px-4 rounded">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Customer Name
                </label>
                <Field
                  type="text"
                  name="customerName"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="E.g. Jon Snow"
                />
                <ErrorMessage
                  name="customerName"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                />
              </div>
              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="E.g. abc@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                />
              </div>
              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Phone
                </label>
                {/* <Field
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="9999999999"
                /> */}
                <PhoneInput
                  name="phone"
                  defaultCountry="IN"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="9999999999"
                  value={values.phone}
                  onChange={(value) => setFieldValue("phone", value)}
                  //   onBlur={() => setFieldTouched("phone", true)}
                />
                {errors.phone && (
                  <div className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100">
                    {errors.phone?.type === "required" && touched.phone
                      ? errors.phone.message
                      : errors.phone}
                    {/* {errors.phone} */}
                  </div>
                )}

                {/* <ErrorMessage
                  name="phone"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                /> */}
              </div>
            </div>

            {/* Checkbox Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Please rate the quality of the service you received from your
                  host.
                </label>
                <div className="flex space-x-4">
                  {["Excellent", "Good", "Fair", "Bad"].map((value) => (
                    <label key={value}>
                      <Field
                        type="checkbox"
                        name="serviceQuality"
                        value={value}
                        checked={values.serviceQuality === value}
                        onChange={() =>
                          setFieldValue(
                            "serviceQuality",
                            values.serviceQuality === value ? "" : value
                          )
                        }
                      />{" "}
                      {value}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="serviceQuality"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Please rate the quality of your beverage.
                </label>
                <div className="flex space-x-4">
                  {["Excellent", "Good", "Fair", "Bad"].map((value) => (
                    <label key={value}>
                      <Field
                        type="checkbox"
                        name="beverageQuality"
                        value={value}
                        checked={values.beverageQuality === value}
                        //   onChange={() => setFieldValue("beverageQuality", value)}
                        onChange={() =>
                          setFieldValue(
                            "beverageQuality",
                            values.beverageQuality === value ? "" : value
                          )
                        }
                      />{" "}
                      {value}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="beverageQuality"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Was our restaurant clean?
                </label>
                <div className="flex space-x-4">
                  {["Excellent", "Good", "Fair", "Bad"].map((value) => (
                    <label key={value}>
                      <Field
                        type="checkbox"
                        name="cleanliness"
                        value={value}
                        checked={values.cleanliness === value}
                        onChange={() =>
                          setFieldValue(
                            "cleanliness",
                            values.cleanliness === value ? "" : value
                          )
                        }
                      />{" "}
                      {value}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="cleanliness"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                  Please rate your overall dining experience.
                </label>
                <div className="flex space-x-4">
                  {["Excellent", "Good", "Fair", "Bad"].map((value) => (
                    <label key={value}>
                      <Field
                        type="checkbox"
                        name="overallExperience"
                        value={value}
                        checked={values.overallExperience === value}
                        // onChange={() =>
                        //   setFieldValue("overallExperience", value)
                        // }
                        onChange={() =>
                          setFieldValue(
                            "overallExperience",
                            values.overallExperience === value ? "" : value
                          )
                        }
                      />{" "}
                      {value}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="overallExperience"
                  component="div"
                  className="before:content-['!'] before:border-red-500 before:border-2 before:rounded-full before:px-[5px] before:text-[10px] before:font-bold before:me-3 p-1 text-red-500 text-sm mt-1 border border-red-300 rounded bg-red-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className=" w-fit self-end bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-10 cursor-pointer"
            >
              Submit Review
            </button>
          </Form>
        )}
      </Formik>

      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className= " text-white mb-4 bg-green-600 w-fit rounded-full p-3 mx-auto">
              
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
      )}
    </>
  );
};

export default FeedbackForm;