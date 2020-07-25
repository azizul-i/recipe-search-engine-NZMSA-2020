import React, { useState, useEffect } from "react"
import RecipeCard from "../CardComponent/RecipeCard"
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
  const [ItemArray, setItemArray] = useState<IState[]>([
    {
      thumbnail: undefined,
      ingredients: undefined,
      href: undefined,
      title: undefined,
    },
  ])

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    fetch(proxyurl + "http://www.recipepuppy.com/api/?i=" + props.SearchQuery)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        setItemArray(response.results)
      })
      .catch(() => console.log("it didn't work"))
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
      <Grid container spacing={3} className="MediaGridContainer">
        {Cards}
      </Grid>
    </div>
  )
}

export default MediaGrid
