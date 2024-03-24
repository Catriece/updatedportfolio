import { FC } from "react";
import {
  useMediaQuery,
  Box,
  Center,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// import WhatsHappeningSection from "../sections/whats-happening";
// import ProjectSection from "../sections/projects/project-section";
// import catriece from "../assets/catriece.png";
// import TypewriterComponent from "../components/typewriter/typewriter-component";
import MyButton from "../components/buttons/button";
import BottomNavigation from "../components/navigation/bottom-navigation";
import { usePageView } from "../context/page-view";
import HomePage from "./home-page";
import TopNavigation from "../components/navigation/top-navigation";
//import { PageViewContext } from "../context/page-view";

const PageView: FC = () => {
  const [ISLARGERTHAN500] = useMediaQuery("(min-width: 500px)");
  const [ISLARGERTHAN600] = useMediaQuery("(min-width: 600px)");

  const { pageView, setPageView } = usePageView();

  const columns = ISLARGERTHAN500 ? "repeat(12, 1fr)" : "repeat(6, 1fr)";

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
    >
      <GridItem
        area="nav"
        top={0}
        zIndex={2}
        h="48pt"
        w="100%"
        colSpan={ISLARGERTHAN500 ? 12 : 6}
      >
        <TopNavigation />
      </GridItem>
      <GridItem
        area="body"
        placeSelf="center"
        w={"100%"}
        h={"100%"}
        colSpan={ISLARGERTHAN500 ? 10 : 6}
        colStart={ISLARGERTHAN500 ? 2 : 1}
      >
        {pageView === "home" && <HomePage />}
        {pageView === "about" && "hi I'm about"}
        {pageView === "projects" && "hi I'm projs"}
        {pageView === "blog" && "hi I'm blog"}
        {pageView === "code" && "hi I'm chal"}
      </GridItem>
      {/* <GridItem
        placeSelf="center"
        colSpan={ISLARGERTHAN500 ? 6 : 4}
        colStart={ISLARGERTHAN500 ? 4 : 2}
      >
        <Center>
          <Box>
            <Stack spacing={3}>
              <MyButton
                variant={"primary"}
                label={"About Me"}
                onClick={() => setPageView("about")}
              />
              <MyButton
                variant={"secondary"}
                label={"Projects"}
                onClick={() => setPageView("projects")}
              />
              <MyButton
                variant={"primary"}
                label={"Blog"}
                onClick={() => setPageView("blog")}
              />
              <MyButton
                variant={"secondary"}
                label={"Code Challenges"}
                onClick={() => setPageView("code")}
              />
            </Stack>
          </Box>
        </Center>
      </GridItem> */}
      {ISLARGERTHAN600 ? null : (
        <GridItem
          area="footer"
          colSpan={ISLARGERTHAN500 ? 12 : 5}
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
