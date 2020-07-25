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
})

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
  })

  function SetUserInput(a: IUserInput) {
    setUserInput(a)
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header Title="Foodle" />
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
        <RecipeGrid SearchQuery={UserInput.SearchQuery} />
      </MuiThemeProvider>
    </div>
  )
}

export default App
