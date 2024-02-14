import { FC } from "react";
import {
  Grid,
  GridItem,
  useMediaQuery,
  Image,
  Box,
  Center,
  Divider,
} from "@chakra-ui/react";
import MobileHeaderComponent from "../components/header/mobile-header-component";
import TypewriterComponent from "../components/typewriter/typewriter-component";
import catriece from "../assets/catriece.png";
import WhatsHappeningSection from "../sections/whats-happening";
import ProjectSection from "../sections/projects/project-section";

const HomePage: FC = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <Grid
      templateAreas={
        isLargerThan600
          ? `"header header"
                  "nav main"
                  "nav footer"`
          : `"header"
                  "main"
                  "footer"`
      }
      gridTemplateRows={isLargerThan600 ? "50px 1fr 30px" : "8.5% 1fr 10%"}
      gridTemplateColumns={isLargerThan600 ? "1fr" : "1fr"}
      h="100vh"
      w="100svw"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      overflow={"scroll"}
    >
      {/* Keep header sticky */}
      <GridItem
        bg="gray.300"
        position="sticky"
        top={0}
        area={"header"}
        zIndex={9999}
      >
        {isLargerThan600 ? null : <MobileHeaderComponent />}
      </GridItem>

      <Box>
        {isLargerThan600 ? (
          <GridItem bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
        ) : null}
        <GridItem area={"main"}>
          <Box sx={{ padding: "15px", maxHeight: "75vh" }}>
            <Center>
              <Image src={catriece} alt="Catriece-Collage" h="70vh" />
            </Center>
          </Box>
          <Box sx={{ minHeight: "75px" }}>
            <Center>
              <TypewriterComponent
                text="Hi, I'm Catriece :)"
                delay={100}
                fontsize={isLargerThan600 ? "40px" : "35px"}
                fontcolor="Black"
              />
            </Center>
          </Box>
          <Divider />
          <Box mt="30px">
            <Center>
              <WhatsHappeningSection />
            </Center>
          </Box>
          <Box mt="30px">
            <Center>
              <ProjectSection />
            </Center>
          </Box>
        </GridItem>
      </Box>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default HomePage;
