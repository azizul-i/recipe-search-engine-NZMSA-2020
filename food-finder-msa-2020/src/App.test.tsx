import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders food-finder", () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/food-finder/i)
  expect(linkElement).toBeInTheDocument()
})
