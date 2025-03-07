import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-600 mb-8">
          {error.statusText || error.message}
        </p>
        <Link 
          to="/" 
          className="bg-brandPrimary text-white px-6 py-2 rounded-lg hover:bg-neutralDGrey transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage