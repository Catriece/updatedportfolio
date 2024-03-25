import { createContext, useState, useContext } from "react";

interface PageViewInterface {
  pageView: string;
  setPageView: (pageView: string) => void;
}

type PageViewProviderProps = {
  children: React.ReactNode;
};

export const PageViewContext = createContext<PageViewInterface | null>(null);

export const PageViewContextProvider = ({
  children,
}: PageViewProviderProps) => {
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

export function usePageView(): PageViewInterface {
  const context = useContext(PageViewContext);
  if (context === null) {
    throw new Error("Task Count Error");
  }
  return context;
}
