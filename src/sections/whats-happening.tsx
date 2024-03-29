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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const currenthappenings = [
  {
    title: "Coding with Callie Workshop",
    description:
      'I am part of a 10-week workshop building a "relatively simple" todo application from start to finish (but doing it really well :).',
    techstack: [
      "TypeScript ",
      "React ",
      "React Router ",
      "ChakraUI ",
      "Nodejs ",
      "NestJS ",
      "PostgreSQL w/TypeORM",
    ],
    link: "https://github.com/Catriece/family-task-app",
  },
];

const WhatsHappeningSection = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Card align="center" w="100%" boxShadow="dark-lg" bg="cyan.400" mb={5}>
        <CardHeader>
          <Heading size="md" fontSize={"2xl"}>
            Current Happenings:
          </Heading>
        </CardHeader>
      </Card>
      {currenthappenings.map((happening, index) => (
        <Card key={index} w="100%" boxShadow="dark-lg" mb={5}>
          <CardHeader fontSize="2xl" pb={2}>
            <b>{happening.title}</b>
            <br />
            <Link
              to={happening.link}
              style={{
                fontSize: "12pt",
                fontWeight: 400,
                textDecoration: "underline",
              }}
            >
              <em>Click here to view project repo</em>
            </Link>
          </CardHeader>
          <CardBody padding="5px 20px">
            <Text>Description:</Text>
            <Text fontWeight={400}>{happening.description}</Text>
          </CardBody>
          <Text
            paddingTop="10px"
            fontWeight={600}
            textAlign="center"
            onClick={onToggle}
          >
            Click here to view techstack
          </Text>
          <CardFooter w="100%">
            <Collapse in={isOpen} animateOpacity>
              <UnorderedList w="100%">
                {happening.techstack.map((stack, index) => (
                  <ListItem key={index} fontWeight={400}>
                    {stack}
                  </ListItem>
                ))}
              </UnorderedList>
            </Collapse>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};

export default WhatsHappeningSection;
