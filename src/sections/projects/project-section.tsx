import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import * as projects from "./project-list";
import { useState } from "react";
import WhatsHappeningSection from "../whats-happening";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [desc, setDesc] = useState<boolean[]>([]);
  const [stack, setStack] = useState<boolean[]>([]);
  const [proj, setProj] = useState<number>(0);

  const handleDesc = (index: number) => {
    setDesc((prevDesc) => {
      const updateDesc = [...prevDesc];
      updateDesc[index] = !updateDesc[index];
      return updateDesc;
    });
  };
  const handleStack = (index: number) => {
    setStack((prevStack) => {
      const updateStack = [...prevStack];
      updateStack[index] = !updateStack[index];
      return updateStack;
    });
  };
  const handleProjButton = (index: number) => {
    console.log(index, "Ind");
    setProj(index);
  };

  const [ISLARGERTHAN750] = useMediaQuery("(min-width: 750px)");
  const projectArr = projects.projects;
  console.log(projectArr[0]);
  return (
    <Flex
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ color: "white", fontSize: "48pt", textAlign: "center" }}>
        My Projects
      </Text>

      <WhatsHappeningSection />

      <Card align="center" w="90%" boxShadow="dark-lg" mb={5} bg="gray.400">
        <CardHeader>
          <Heading size="md" fontSize={"2xl"}>
            Past Projects:
          </Heading>
        </CardHeader>
      </Card>
      <Flex
        style={
          ISLARGERTHAN750
            ? {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        {ISLARGERTHAN750 ? (
          <Flex
            width="90%"
            height="100%"
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width="45%"
              height="100%"
            >
              {projectArr.map((project, index) => (
                <Button
                  variant={proj === index ? "primary" : "secondary"}
                  width={"100%"}
                  onClick={() => handleProjButton(index)}
                  fontSize={"smaller"}
                >
                  {project.name}
                </Button>
              ))}
            </Flex>
            <Flex width="50%">
              <Link to={projectArr[proj].link}>
                <Card cursor={"pointer"}>
                  <CardHeader>
                    <Text fontWeight={800} fontSize={"large"}>
                      {projectArr[proj].name}
                    </Text>
                    <Text>{projectArr[proj].description}</Text>
                  </CardHeader>
                  <CardBody>
                    <Text fontWeight={800}>The Stack:</Text>
                    <Text fontSize={"medium"}>
                      {projectArr[proj].techstack.join(" - ")}
                    </Text>
                  </CardBody>
                </Card>
              </Link>
            </Flex>
          </Flex>
        ) : (
          projectArr.map((project, index) => (
            <Card
              key={index}
              width={ISLARGERTHAN750 ? "90%" : "450pt"}
              maxWidth={"450pt"}
              boxShadow="dark-lg"
              textAlign="center"
              margin={3}
            >
              <CardHeader fontSize="xl" pb={0} fontWeight={800}>
                {project.name}
              </CardHeader>
              <CardBody>
                <Text
                  style={{ color: "black", fontWeight: 800 }}
                  onClick={() => handleDesc(index)}
                >
                  Show Project Description
                </Text>
                <Collapse in={desc[index]}>{project.description}</Collapse>
                <br />
                <Text
                  style={{ color: "black", fontWeight: 800 }}
                  onClick={() => handleStack(index)}
                >
                  Show Project Tech Stack
                </Text>
                <Collapse in={stack[index]}>
                  <UnorderedList w="100%">
                    {project.techstack.map((stack, index) => (
                      <ListItem key={index} style={{ textAlign: "left" }}>
                        {stack}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Collapse>
              </CardBody>
            </Card>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectSection;
