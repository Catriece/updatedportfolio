import { FC } from "react";
import {
  useMediaQuery,
  Image,
  Box,
  Center,
  SimpleGrid,
  Button,
  Stack,
  Flex,
  Kbd,
} from "@chakra-ui/react";
import WhatsHappeningSection from "../sections/whats-happening";
import ProjectSection from "../sections/projects/project-section";
import catriece from "../assets/catriece.png";
import TypewriterComponent from "../components/typewriter/typewriter-component";
import MyButton from "../components/buttons/button";
import { MD_RADIUS } from "../styles/design-styles";

const HomePage: FC = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    // <Center>
    //   <Grid
    //     templateAreas={`"header"
    //           "main"
    //           "footer"`}
    //     gridTemplateRows={"8.5% 1fr 10%"}
    //     gridTemplateColumns={"1fr"}
    //     h="100vh"
    //     w="100vw"
    //     color="blackAlpha.700"
    //     fontWeight="bold"
    //     overflow={"scroll"}
    //   >
    //     {/* Keep header sticky */}
    //     <GridItem
    //       bg={isLargerThan600 ? "green.300" : "gray.300"}
    //       position="sticky"
    //       top={0}
    //       area={"header"}
    //       zIndex={9999}
    //     ></GridItem>

    //     {isLargerThan600 ? (
    //       <GridItem bg="pink.300" area={"nav"}>
    //         <Text pt={5} pl={3} fontSize={"2xl"} color="black">
    //           Navigation
    //         </Text>
    //       </GridItem>
    //     ) : null}
    //     <GridItem area={"main"}>
    //       <Box sx={{ padding: "15px", maxHeight: "75vh" }}></Box>
    //       <Box sx={{ minHeight: "75px" }}>
    //         <Center></Center>
    //       </Box>
    //       <Divider />
    //       <Box mt="30px">
    //         <Center>
    //           <WhatsHappeningSection />
    //         </Center>
    //       </Box>
    //       <Box mt="30px">
    //         <Center>
    //           <ProjectSection />
    //         </Center>
    //       </Box>
    //     </GridItem>
    //     <GridItem bg="blue.300" area={"footer"}>
    //       Footer
    //     </GridItem>
    //   </Grid>
    // </Center>
    <SimpleGrid h={"100vh"} columns={isLargerThan600 ? 2 : 1} spacing={3}>
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
      <Center>
        <Box>
          <Stack spacing={3}>
            <MyButton
              borderRadius={MD_RADIUS}
              height="32pt"
              label={"About Me"}
            />
            <MyButton
              borderRadius={MD_RADIUS}
              height="32pt"
              label={"Current Projects"}
            />
            <MyButton
              borderRadius={MD_RADIUS}
              height="32pt"
              label={"Past Projects"}
            />
            <MyButton borderRadius={MD_RADIUS} height="32pt" label={"Blog"} />
            <MyButton
              borderRadius={MD_RADIUS}
              height="32pt"
              label={"Code Challenges"}
            />
          </Stack>
        </Box>
      </Center>
    </SimpleGrid>
  );
};

export default HomePage;
