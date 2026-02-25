import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { OverviewPage } from "./components/pages/OverviewPage";
import { SpectrumPage } from "./components/pages/SpectrumPage";
import { TypographyPage } from "./components/pages/TypographyPage";
import { GradientsPage } from "./components/pages/GradientsPage";
import { ComponentsPage } from "./components/pages/ComponentsPage";
import { SpacingPage } from "./components/pages/SpacingPage";
import { TokensPage } from "./components/pages/TokensPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: OverviewPage },
      { path: "spectrum", Component: SpectrumPage },
      { path: "typography", Component: TypographyPage },
      { path: "gradients", Component: GradientsPage },
      { path: "components", Component: ComponentsPage },
      { path: "spacing", Component: SpacingPage },
      { path: "tokens", Component: TokensPage },
    ],
  },
]);