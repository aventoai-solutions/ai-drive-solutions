import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { hydrateStart } from "@tanstack/react-start/client";

import type { AnyRouter } from "@tanstack/react-router";

let hydrationPromise: Promise<AnyRouter> | undefined;
let hydratedRouter: AnyRouter | undefined;
let hydrationError: unknown;

function loadRouter() {
  if (!hydrationPromise) {
    hydrationPromise = hydrateStart().then(
      (router) => {
        hydratedRouter = router;
        return router;
      },
      (error) => {
        hydrationError = error;
        throw error;
      },
    );
  }

  return hydrationPromise;
}

function ClientRouter() {
  if (hydrationError) {
    throw hydrationError;
  }

  if (!hydratedRouter) {
    throw loadRouter();
  }

  return <RouterProvider router={hydratedRouter} />;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientRouter />
    </StrictMode>,
  );
});