import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center flex-col gap-3 pb-20">
        <h1 className="text-6xl">404</h1>
        <h2 className="text-3xl">Page Not Found</h2>
        <p className="text-md">
          Please go back to the <Link to="/" className="font-semibold text-blue-600 hover:underline">Form Page</Link> and try again.
        </p>
      </div>
  )
}

export default NotFound