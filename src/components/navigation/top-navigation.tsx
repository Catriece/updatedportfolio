import { Flex, useMediaQuery } from "@chakra-ui/react";
import MyButton from "../buttons/button";
import { usePageView } from "../../context/page-view";
import { HamburgerIcon } from "@chakra-ui/icons";

const TopNavigation = () => {
  const { setPageView } = usePageView();
  const [ISLARGERTHAN700] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      position={"fixed"}
      top={0}
      right={0}
      justifyContent={"flex-end"}
      mt={5}
      mr={5}
      bg={"black"}
    >
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
        <HamburgerIcon color="white" />
      )}
    </Flex>
  );
};

export default TopNavigation;
