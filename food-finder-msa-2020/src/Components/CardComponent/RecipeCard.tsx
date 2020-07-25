import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import FoodIcon from "../../Images/foodicon-small.png"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import CardActions from "@material-ui/core/CardActions"
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
      <Link
        href={props.RecipeLink}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Card className="MediaCardContainer">
          <CardActionArea>
            {props.ImageUrl ? (
              <CardMedia className="MediaCardImage" image={props.ImageUrl} />
            ) : (
              <CardMedia
                className="MediaCardImage"
                src={FoodIcon}
                component="img"
                title="recipelogo"
              />
            )}
            <CardContent>
              <Typography
                variant="caption"
                color="textSecondary"
                component="p"
                className="MediaCardDescription"
              >
                <b className="RecipeCardTitle">{props.Title}</b>
                <br />
                <b>Ingredients: </b>
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
interface IRecipeCardProps {
  Title: string | undefined
  ImageUrl: string | undefined
  Ingredients: string | undefined
  RecipeLink: string | undefined
}
