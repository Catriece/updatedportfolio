import {
  Image,
  Flex,
  Text,
  AspectRatio,
  useMediaQuery,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import catriece from "../assets/catriece.png";
import catriecesideprofile from "../assets/catriecesideprofile.jpeg";
import MyButton from "../components/buttons/button";
import { usePageView } from "../context/page-view";

const HomePage = () => {
  const [ISSMALLERTHAN550] = useMediaQuery("(max-width: 550px)");
  const [ISLARGERTHAN750] = useMediaQuery("(min-width: 750px)");
  const [ISLARGERTHAN975] = useMediaQuery("(min-width: 975px)");
  const [ISLARGERTHAN1050] = useMediaQuery("(min-width: 1050px)");

  const { setPageView } = usePageView();

  return (
    <Flex
      flexDirection={ISLARGERTHAN750 ? "row" : "column"}
      justifyContent="center"
      alignItems="center"
      h="100%"
      w="100%"
    >
      <Flex w="45%" pr={ISSMALLERTHAN550 ? 0 : 35} justifyContent={"center"}>
        <AspectRatio
          minWidth={
            ISSMALLERTHAN550 ? "148pt" : ISLARGERTHAN975 ? "250pt" : "225pt"
          }
          maxWidth={ISLARGERTHAN975 ? "300pt" : "75pt"}
          ratio={3 / 4}
        >
          <Image
            borderRadius={"30%"}
            src={catriecesideprofile}
            alt="Catriece"
          />
        </AspectRatio>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        w={ISSMALLERTHAN550 ? "90%" : "55%"}
      >
        {ISLARGERTHAN750 ? (
          <AspectRatio
            minWidth={ISLARGERTHAN975 ? "25pt" : "15pt"}
            maxWidth={ISLARGERTHAN975 ? "25pt" : "15pt"}
            ratio={2 / 4}
          >
            <Image src={catriece} alt="Catriece-Collage" />
          </AspectRatio>
        ) : null}
        <Stack spacing={5}>
          <Text
            color="white"
            fontSize={ISLARGERTHAN975 ? "6xl" : "5xl"}
            fontWeight={800}
            textAlign={ISSMALLERTHAN550 ? "center" : "left"}
          >
            Software Engineer.
          </Text>

          <Text
            color="white"
            w={ISLARGERTHAN1050 ? "80%" : "100%"}
            mb={5}
            fontSize={ISLARGERTHAN975 ? "lg" : "md"}
          >
            Here coding dreams into reality. I take the thoughtful,
            detail-oriented, and friendly approach to coding.
          </Text>
          {/* <LanguagesComponent
            height={ISLARGERTHAN975 ? "40pt" : "32pt"}
            width={ISLARGERTHAN975 ? "40pt" : "32pt"}
          /> */}

          <ButtonGroup alignSelf={ISSMALLERTHAN550 ? "center" : ""} mb={5}>
            <MyButton
              label={"Hire Me"}
              onClick={() => setPageView("contact")}
              variant="primary"
              width="150pt"
            />
            <MyButton
              label={"Projects"}
              onClick={() => setPageView("projects")}
              variant="secondary"
              width="100pt"
            />
          </ButtonGroup>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default HomePage;
