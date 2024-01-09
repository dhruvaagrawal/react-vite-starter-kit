import { FC } from "react"

import { Link } from "@tanstack/react-router"

import { APP_NAME } from "@/lib/constants"

import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex h-auto w-1/3 items-center justify-between rounded-full bg-secondary px-10 py-5">
      {/* This is the Logo component */}
      <h1 className="text-2xl font-extrabold lowercase">{APP_NAME}</h1>
      <div className="flex gap-10 text-lg">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <ThemeToggle />
    </header>
  )
}

export default Header
