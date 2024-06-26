import { FC } from "react";
import {
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  Divider,
  Center,
} from "@chakra-ui/react";

import BottomNavigation from "../components/navigation/bottom-navigation";
import { usePageView } from "../context/page-view";
import HomePage from "./home-page";
import TopNavigation from "../components/navigation/top-navigation";
import ContactForm from "../sections/contact/contact-me";
import ProjectSection from "../sections/projects/project-section";
import AboutPage from "./about-page";
//import { PageViewContext } from "../context/page-view";

const PageView: FC = () => {
  const [ISLARGERTHAN750] = useMediaQuery("(min-width: 750px)");
  const [ISLARGERTHAN700] = useMediaQuery("(min-width: 700px)");

  const { pageView } = usePageView();

  const columns = ISLARGERTHAN750 ? "repeat(12, 1fr)" : "repeat(6, 1fr)";

  return (
    <Grid
      templateAreas={`"nav" 
      "body" 
      "footer" `}
      h={"100dvh"}
      overflow={"scroll"}
      gridTemplateRows={"48pt 1fr 32pt"}
      gridTemplateColumns={columns}
      gap={3}
      bg={"#000"}
      marginBottom={"45pt"}
    >
      <GridItem
        area="nav"
        zIndex={2}
        w="100%"
        colSpan={ISLARGERTHAN750 ? 12 : 6}
      >
        <TopNavigation />
      </GridItem>
      <GridItem
        area="body"
        placeSelf="center"
        w={"100%"}
        h={"100%"}
        colSpan={ISLARGERTHAN750 ? 10 : 6}
        colStart={ISLARGERTHAN750 ? 2 : 1}
      >
        {pageView === "home" && <HomePage />}
        {pageView === "about" && <AboutPage />}
        {pageView === "projects" && <ProjectSection />}
        {pageView === "blog" && "hi I'm blog"}
        {pageView === "code" && "hi I'm chal"}
        {pageView === "contact" && <ContactForm />}
      </GridItem>

      {ISLARGERTHAN700 ? (
        <>
          <GridItem
            area="footer"
            colSpan={ISLARGERTHAN750 ? 12 : 5}
            position={"fixed"}
            w={"100%"}
            h="10%"
            bgColor="#000"
            bottom={0}
          >
            <Center>
              <Divider w={"90%"} mb={6} opacity={0.25} />
            </Center>
            <Center>
              <Text color="white">Catriece Loves Code © </Text>
            </Center>
          </GridItem>
        </>
      ) : (
        <GridItem
          area="footer"
          colSpan={ISLARGERTHAN750 ? 12 : 5}
          position={"fixed"}
          w={"100%"}
          h="8%"
          bottom={0}
        >
          <BottomNavigation />
        </GridItem>
      )}
    </Grid>
  );
};

export default PageView;
