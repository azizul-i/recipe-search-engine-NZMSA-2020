import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import FoodIcon from "../../Images/foodicon-small.png"
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
                variant="body2"
                color="textSecondary"
                component="p"
                className="MediaCardDescription"
              >
                <h3 className="RecipeCardTitle">{props.Title}</h3>
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
