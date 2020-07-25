import React, { useState, useEffect } from "react"
import RecipeCard from "../CardComponent/RecipeCard"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid } from "@material-ui/core"
import "./RecipeGrid.css"

interface IState {
  title: string | undefined
  thumbnail: string | undefined
  ingredients: string | undefined
  href: string | undefined
}
interface IMediaGridProps {
  SearchQuery: string | null
}
function MediaGrid(props: IMediaGridProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [ItemArray, setItemArray] = useState<IState[]>([
    {
      thumbnail: undefined,
      ingredients: undefined,
      href: undefined,
      title: undefined,
    },
  ])

  useEffect(() => {
    setIsLoading(true)
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    fetch(proxyurl + "http://www.recipepuppy.com/api/?i=" + props.SearchQuery)
      .then((response) => response.json())
      .then((response) => {
        setItemArray(response.results)
        setIsLoading(false)
      })
      .catch(() => {
        console.log("An Error Occured, Please Refresh The Page")
        alert("An API Error Occured")
      })
  }, [props.SearchQuery])

  var Cards: JSX.Element[] = []
  ItemArray.forEach((el: IState, i: Number) => {
    if (!el) {
      return
    }
    Cards.push(
      <Grid
        key={"card_" + i}
        item
        sm={6}
        md={4}
        lg={3}
        className="MediaGridCard"
      >
        <RecipeCard
          Title={el["title"]}
          ImageUrl={el["thumbnail"]}
          Ingredients={el["ingredients"]}
          RecipeLink={el["href"]}
        />
      </Grid>
    )
  })

  return (
    <div>
      {isLoading ? <CircularProgress color={"secondary"} size={100} /> : null}
      <Grid container spacing={3} className="MediaGridContainer">
        {!isLoading ? Cards : null}
      </Grid>
    </div>
  )
}

export default MediaGrid
