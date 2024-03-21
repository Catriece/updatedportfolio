import { createContext, useState, FC } from "react";

interface PageViewInterface {
  pageView: string;
  setPageView: (pageView: string) => void;
}

export const PageViewContext = createContext<PageViewInterface | null>(null);

export const PageViewContextProvider: FC = ({ children }: any) => {
  const [pageView, setPageView] = useState<string>("home");

  const pageViewProps = {
    setPageView,
    pageView,
  };

  return (
    <PageViewContext.Provider value={pageViewProps}>
      {children}
    </PageViewContext.Provider>
  );
};
