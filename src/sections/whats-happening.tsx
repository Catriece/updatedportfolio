import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Flex,
  ListItem,
  UnorderedList,
  Collapse,
  useDisclosure,
  CardFooter,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const currenthappenings = [
  {
    title: "Social Media Application",
    description:
      "Myself, and another developer, are currently building a social media application. This social media application will include, user authentication, messaging, user created content and opportunities for users to interact with each other in real time. The expected timeline for completion and launch is December of 2024. I am the lead developer on the frontend and my partner is the lead developer on the backend.",
    techstack: ["React Native", "TypeScript", "MySQL", "Github", "Java"],
    link: "",
  },
  {
    title: "Coding with Callie Workshop: Deploy In Public",
    description:
      "A self-paced workshop where I am learning to deploy a full-stack application through AWS.",
    techstack: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Github",
      "Helm",
      "PostgreSQL",
      "NGINX",
      "React",
      "NestJS",
      "NodeJs",
      "TypeScript",
    ],
    link: "",
  },
];

const WhatsHappeningSection = () => {
  const [desc, setDesc] = useState<boolean[]>([]);
  const [stack, setStack] = useState<boolean[]>([]);

  const [ISLARGERTHAN750] = useMediaQuery("(min-width: 750px)");

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
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Card
        align="center"
        w="90%"
        maxWidth={"500pt"}
        boxShadow="dark-lg"
        mb={5}
        bg="gray.400"
      >
        <CardHeader>
          <Heading size="md" fontSize={"2xl"}>
            What I am up to now:
          </Heading>
        </CardHeader>
      </Card>
      <Flex
        flexDirection={ISLARGERTHAN750 ? "row" : "column"}
        style={
          ISLARGERTHAN750
            ? { margin: "auto", justifyContent: "center", alignItems: "center" }
            : { justifyContent: "center", alignItems: "center" }
        }
        w="100%"
      >
        {currenthappenings.map((happening, index) => (
          <Card
            key={index}
            w={ISLARGERTHAN750 ? "200pt" : "90%"}
            minHeight={ISLARGERTHAN750 ? "248pt" : ""}
            maxWidth={"450pt"}
            boxShadow="dark-lg"
            mb={5}
          >
            <CardHeader fontSize="2xl" pb={2}>
              <b>{happening.title}</b>
              <br />
              {happening.link !== "" ? (
                <Link
                  to={happening.link}
                  style={{
                    fontSize: "12pt",
                    fontWeight: 400,
                    textDecoration: "underline",
                  }}
                >
                  <Text textAlign={"center"}>
                    <em>Click here to view project repo</em>
                  </Text>
                </Link>
              ) : null}
            </CardHeader>
            <CardBody padding="5px 20px">
              <Collapse in={desc[index]} animateOpacity>
                <Text style={{ fontWeight: 750 }}>The Description:</Text>
                <Text>{happening.description}</Text>
              </Collapse>
              <Text
                paddingTop="10px"
                fontWeight={600}
                onClick={() => handleDesc(index)}
              >
                Click here to {desc[index] ? "hide" : "view"} the description.
              </Text>
              <Divider mt={3} />
              <Collapse in={stack[index]} animateOpacity>
                <Text style={{ fontWeight: 750 }}>The Tech Stack: </Text>
                <UnorderedList w="100%">
                  {happening.techstack.map((stack, index) => (
                    <ListItem key={index} fontWeight={400}>
                      {stack}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Collapse>
              <Text
                paddingTop="10px"
                fontWeight={600}
                onClick={() => handleStack(index)}
              >
                Click here to {stack[index] ? "hide" : "view"} the tech stack.
              </Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default WhatsHappeningSection;
