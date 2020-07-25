import React from "react"

interface HeaderProps {
  Title: string
}

export default function Header(props: HeaderProps) {
  return <div>{props.Title}</div>
}
