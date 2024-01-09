import { StrictMode } from "react"

import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import ReactDOM from "react-dom/client"

import "./index.css"

import Header from "@/components/header"
import HomePage from "@/components/pages/home"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="flex w-full items-center justify-center p-4">
        <Header />
      </div>
      <Outlet />
      <TailwindIndicator />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = new Router({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("app")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
