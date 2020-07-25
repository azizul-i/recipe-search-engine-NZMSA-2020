import React from "react"
import { Typography } from "@material-ui/core"

interface HeaderProps {
  Title: string
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>
        {props.Title}
      </Typography>
    </div>
  )
}
