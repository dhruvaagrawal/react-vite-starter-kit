import React from "react"
import { ClerkProvider } from "@clerk/clerk-react"
import { neobrutalism } from "@clerk/themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"

import "./index.css"

import { env } from "@/env"

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={env.VITE_CLERK_PUBLISHABLE_KEY}
      appearance={{ baseTheme: neobrutalism }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ClerkProvider>
  </React.StrictMode>
)
