import React from "react"
import { Link } from "gatsby"
import MainLayout from "../templates/mainLayout"

const NotFound = () => {
  return (
    <MainLayout title="404">
      <h1>Not Found</h1>
      <p>
        <Link to="/">Go home! </Link>
      </p>
    </MainLayout>
  )
}
export default NotFound
