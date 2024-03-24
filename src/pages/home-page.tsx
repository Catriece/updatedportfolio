import {
  Image,
  Flex,
  Text,
  AspectRatio,
  useMediaQuery,
  Stack,
  Box,
  Divider,
} from "@chakra-ui/react";
import catriece from "../assets/catriece.png";
import MyButton from "../components/buttons/button";
import { usePageView } from "../context/page-view";
import WhatsHappeningSection from "../sections/whats-happening";

const HomePage = () => {
  const [ISLARGERTHAN975] = useMediaQuery("(min-width: 975px)");

  const { setPageView } = usePageView();

  return (
    <Box>
      <Flex
        flexDirection={ISLARGERTHAN975 ? "row" : "column"}
        justifyContent={ISLARGERTHAN975 ? "space-between" : "center"}
        alignItems="center"
        h="90vh"
        w={"100%"}
      >
        <AspectRatio
          minWidth={ISLARGERTHAN975 ? "200pt" : "50pt"}
          maxWidth={ISLARGERTHAN975 ? "200pt" : "75pt"}
          ratio={2 / 4}
        >
          <Image src={catriece} alt="Catriece-Collage" />
        </AspectRatio>
        <Flex flexDirection="column" w={"60%"}>
          <Stack spacing={6}>
            <Text color="white" fontSize={"5xl"}>
              I'm Catriece 👋{" "}
            </Text>
            <Text color="white" fontSize={"3xl"}>
              Your <em>thoughtful, detailed oriented, and friendly </em>{" "}
              neighborhood developer
            </Text>
            <Text color="white" fontSize={"xl"} margin={3}>
              who is passionate about{" "}
              <i>
                <b>coding your ideas into reality</b>
              </i>
              .
            </Text>
            <Flex
              flexDirection="column"
              justifyContent={
                ISLARGERTHAN975 ? "space-between" : "space-around"
              }
              w={"100%"}
              h={"90pt"}
            >
              <MyButton
                variant="primary"
                label="Let's chat"
                width={"100%"}
                onClick={() => console.log("Chatting")}
              />
              <MyButton
                variant="secondary"
                label="Projects"
                width={"100%"}
                onClick={() => setPageView("projects")}
              />
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Divider mt={10} mb={10} />

      <WhatsHappeningSection />
    </Box>
  );
};

export default HomePage;
