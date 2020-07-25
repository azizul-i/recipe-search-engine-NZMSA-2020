import React, { useState } from "react"
import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { IUserInput } from "../../Common/Interfaces"
import "./SearchBar.css"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

interface ISearchBarProps {
  SetUserInput: (userInput: IUserInput) => void
}

function SearchBar(props: ISearchBarProps) {
  const [History, setHistory] = useState<string[]>([])
  const [SearchQuery, setSearchQuery] = useState<string | null>("")
  const handleSearchQueryChange = (inputString: string | null) => {
    setSearchQuery(inputString)
  }

  const classes = useStyles()

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      let duplicateFlag: boolean = false
      let prevHistory: string[] = History
      History.forEach((ingredient: string, i: Number) => {
        if (ingredient === SearchQuery) {
          duplicateFlag = true
          return
        }
      })
      if (!duplicateFlag) {
        prevHistory.push(SearchQuery)
        setHistory(prevHistory)
      }
      let UserInput: IUserInput = {
        SearchQuery: ConcatenateHistory(prevHistory),
      }
      props.SetUserInput(UserInput)
      setSearchQuery("")
    }
  }

  function ConcatenateHistory(historyArray: string[]) {
    let ingredientsList: string = ""
    historyArray.forEach((el: string, i: number) => {
      if (i !== 0) {
        ingredientsList = ingredientsList + ", " + el
      } else {
        ingredientsList = el
      }
    })
    return ingredientsList
  }

  const handleDelete = (ingredient: string) => {
    const prevHistory: string[] = History
    prevHistory.splice(prevHistory.indexOf(ingredient), 1)
    setHistory(prevHistory)
    let UserInput: IUserInput = {
      SearchQuery: ConcatenateHistory(prevHistory),
    }
    props.SetUserInput(UserInput)
  }

  return (
    <div className="SearchBarContainer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Enter an Ingredient"
            variant="outlined"
            value={SearchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add to your Ingredient List!
          </Button>
        </Grid>
      </Grid>
      <h6>*Powered by Recipe Puppy API</h6>
      <br />
      <Typography variant="body1" component="p" gutterBottom>
        {History.length === 0
          ? "Added Ingredients: NONE! :("
          : "Added Ingredients: BELOW! :)"}
      </Typography>
      <ul>
        {History.map((el: string, i: number) => {
          return (
            <Chip
              label={el}
              onDelete={() => handleDelete(el)}
              className={classes.chip}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default SearchBar
