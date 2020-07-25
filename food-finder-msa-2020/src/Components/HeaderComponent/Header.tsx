import React from "react"
import { Typography } from "@material-ui/core"

interface HeaderProps {
  Title: string
  Description: string
  Comments: string | null
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        {props.Title}
      </Typography>
      <Typography variant="subtitle2" component="p" gutterBottom>
        {props.Description}
        <br />
        <i>{props.Comments}</i>
      </Typography>
    </div>
  )
}
