import { FC } from "react"

import { Link } from "@tanstack/react-router"

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div>
      <div className="flex gap-4 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
    </div>
  )
}

export default Header
