import { Box, Center, Code, Flex } from "@chakra-ui/react";
import { SM_SPACE, XS_SPACE } from "../../styles/design-styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Face2RoundedIcon from "@mui/icons-material/Face2Rounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const BottomNavigation = () => {
  const options = [
    {
      icon: <HomeRoundedIcon />,
      label: "Home",
    },
    {
      icon: <Face2RoundedIcon />,
      label: "About",
    },
    {
      icon: <ContentPasteRoundedIcon />,
      label: "Projects",
    },
    {
      icon: <ArticleOutlinedIcon />,
      label: "Blog",
    },
    // {
    //   icon: <CodeOutlinedIcon />,
    //   label: "Code",
    // },
  ];

  return (
    <Flex
      role="navigation"
      alignItems="center"
      justifyContent="center"
      bgColor={"gray.300"}
      h={"100%"}
      w={"100%"}
    >
      {options.map((option, index) => (
        <Flex
          key={index}
          w={`${100 / options.length}%`}
          flexDirection={"column"}
          padding={`0 ${SM_SPACE}`}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {option.icon}
          {option.label}
        </Flex>
      ))}
      {/* <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box> */}
    </Flex>
  );
};

export default BottomNavigation;
