import { Box, Flex, useMediaQuery, Image, Center } from "@chakra-ui/react";
import MyButton from "../buttons/button";
import { usePageView } from "../../context/page-view";
import { HamburgerIcon } from "@chakra-ui/icons";
import clc from "../../assets/clc.png";

const TopNavigation = () => {
  const { setPageView } = usePageView();
  const [ISLARGERTHAN700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      position={"fixed"}
      top={0}
      right={0}
      justifyContent={"space-between"}
      mr={5}
      bg={"black"}
      w="100%"
      h="48pt"
    >
      <Box as="button" pl={"40pt"} onClick={() => setPageView("home")}>
        <Image src={clc} w="150px" alt="Catriece Loves Code Logo" />
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        {ISLARGERTHAN700 ? (
          <>
            <MyButton
              label={"Home"}
              onClick={() => setPageView("home")}
              variant={"ghost"}
              color="white"
            />
            <MyButton
              label={"Projects"}
              onClick={() => setPageView("projects")}
              variant={"ghost"}
              color="white"
            />
            <MyButton
              label={"About Me"}
              onClick={() => setPageView("about")}
              variant={"ghost"}
              color="white"
            />
            <MyButton
              label={"Hire Me"}
              onClick={() => setPageView("contact")}
              variant={"primary"}
            />
          </>
        ) : (
          <Center>
            <HamburgerIcon color="white" />
          </Center>
        )}
      </Flex>
    </Flex>
  );
};

export default TopNavigation;
