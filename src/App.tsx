import { queryClient } from "@/main"
import { ErrorComponent, Router, RouterProvider } from "@tanstack/react-router"

import { useSessionStorage } from "@/hooks/use-session-storage"
import { auth } from "@/lib/auth"

import { Icons } from "./components/icons"
import { routeTree } from "./route-tree.gen"

const router = new Router({
  routeTree,
  defaultPendingComponent: () => (
    <div className="p-2 text-2xl">
      <Icons.loader />
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!, // We'll inject this when we render
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function App() {
  // This stuff is just to tweak our sandbox setup in real-time
  const [loaderDelay, setLoaderDelay] = useSessionStorage("loaderDelay", 500)
  const [pendingMs, setPendingMs] = useSessionStorage("pendingMs", 1000)
  const [pendingMinMs, setPendingMinMs] = useSessionStorage("pendingMinMs", 500)

  return (
    <>
      <div className="items-left fixed bottom-2 left-2 flex w-52 flex-col flex-wrap gap-1 divide-y divide-gray-500/20 rounded border-b bg-white bg-opacity-75 text-xs shadow-md shadow-black/20">
        <div className="space-y-2 p-2">
          <div className="flex gap-2">
            <button
              className="rounded bg-blue-500 p-1 px-2 text-white"
              onClick={() => setLoaderDelay(150)}
            >
              Fast
            </button>
            <button
              className="rounded bg-blue-500 p-1 px-2 text-white"
              onClick={() => setLoaderDelay(500)}
            >
              Fast 3G
            </button>
            <button
              className="rounded bg-blue-500 p-1 px-2 text-white"
              onClick={() => setLoaderDelay(2000)}
            >
              Slow 3G
            </button>
          </div>
          <div>
            <div>Loader Delay: {loaderDelay}ms</div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={loaderDelay}
              onChange={(e) => setLoaderDelay(e.target.valueAsNumber)}
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2 p-2">
          <div className="flex gap-2">
            <button
              className="rounded bg-blue-500 p-1 px-2 text-white"
              onClick={() => {
                setPendingMs(1000)
                setPendingMinMs(500)
              }}
            >
              Reset to Default
            </button>
          </div>
          <div>
            <div>defaultPendingMs: {pendingMs}ms</div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={pendingMs}
              onChange={(e) => setPendingMs(e.target.valueAsNumber)}
              className="w-full"
            />
          </div>
          <div>
            <div>defaultPendingMinMs: {pendingMinMs}ms</div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={pendingMinMs}
              onChange={(e) => setPendingMinMs(e.target.valueAsNumber)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <RouterProvider
        router={router}
        defaultPreload="intent"
        defaultPendingMs={pendingMs}
        defaultPendingMinMs={pendingMinMs}
        context={{ auth }}
      />
    </>
  )
}

export default App
