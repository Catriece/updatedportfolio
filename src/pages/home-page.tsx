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
//import { PageViewContext } from "../context/page-view";

const HomePage: FC = () => {
  const [ISLARGERTHAN500] = useMediaQuery("(min-width: 500px)");
  const [ISLARGERTHAN600] = useMediaQuery("(min-width: 600px)");

  const columns = ISLARGERTHAN500 ? "repeat(12, 1fr)" : "repeat(6, 1fr)";

  return (
    <Grid h={"100vh"} gridTemplateColumns={columns} gap={3}>
      {/* <Center>
        <Flex flexDirection={"column"}>
          <Box>
            <Image src={catriece} alt={"Catriece Collage"} h={"500px"} />
          </Box>
          <Box h={"100px"} textAlign={"center"}>
            <TypewriterComponent
              text={"I'm Catriece"}
              delay={300}
              fontsize={"50px"}
              fontcolor={"black"}
            />
          </Box>
        </Flex>
      </Center> */}

      <GridItem
        placeSelf="center"
        colSpan={ISLARGERTHAN500 ? 6 : 4}
        colStart={ISLARGERTHAN500 ? 4 : 2}
      >
        <Center>
          <Box>
            <Stack spacing={3}>
              <MyButton variant={"primary"} label={"About Me"} />
              <MyButton variant={"secondary"} label={"Current Projects"} />
              <MyButton variant={"tertiary"} label={"Past Projects"} />
              <MyButton variant={"primary"} label={"Blog"} />
              <MyButton variant={"secondary"} label={"Code Challenges"} />
            </Stack>
          </Box>
        </Center>
      </GridItem>
      {ISLARGERTHAN600 ? null : (
        <GridItem
          colSpan={ISLARGERTHAN500 ? 12 : 4}
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

export default HomePage;
