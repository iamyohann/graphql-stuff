import Home from "./Home";
import FAQ from "./FAQ";

export type AppRoute = {
  id: string;
  exact: boolean;
  path: string;
  name: string;
};

export type Page = {
  id: string;
  route: AppRoute;
  pageType: "HOME" | "FAQ";
  title: string;
  subtitle: string;
  homeContent: {
    hero: string;
  };
  faqContent: {
    faqs: {
      title: String;
      body: String;
    }[];
  };
};

export { Home, FAQ };
