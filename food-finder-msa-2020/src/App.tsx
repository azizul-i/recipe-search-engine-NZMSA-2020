import React, { useState } from "react"
import "./App.css"
import SearchBar from "./Components/SearchBarComponent/SearchBar"
import { IUserInput } from "./Common/Interfaces"
import RecipeGrid from "./Components/RecipeGridComponent/RecipeGrid"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Header from "./Components/HeaderComponent/Header"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#79007b",
    },
    secondary: {
      main: "#b500b8",
    },
  },
})

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
  })

  function SetUserInput(userInput: IUserInput) {
    setUserInput(userInput)
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header
          Title="Food-Finder"
          Description="Enter ingredients one by one into the system, and find the perfect recipe for you!"
          Comments="| Click the cards for further detail on the recipes |"
        />
        <SearchBar
          SetUserInput={(ingredients: IUserInput) => SetUserInput(ingredients)}
        />
        <RecipeGrid SearchQuery={UserInput.SearchQuery} />
      </MuiThemeProvider>
    </div>
  )
}

export default App
