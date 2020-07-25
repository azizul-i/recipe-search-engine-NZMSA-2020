import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import "./RecipeCard.css"

interface IRecipeCardProps {
  Title: string | undefined
  ImageUrl: string | undefined
  Ingredients: string | undefined
  RecipeLink: string | undefined
}

function RecipeCard(props: IRecipeCardProps) {
  return (
    <div>
      <Link href={props.RecipeLink} target="_blank">
        <Card className="MediaCardContainer">
          <CardActionArea>
            <CardMedia className="MediaCardImage" image={props.ImageUrl} />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="MediaCardDescription"
              >
                <b>{props.Title}</b>
                <p>
                  <b>Ingredients: </b>
                </p>
                {props.Ingredients}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  )
}

export default RecipeCard
