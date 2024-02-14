import {
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
  useDisclosure,
} from "@chakra-ui/react";
import * as projects from "./project-list";
import { Link } from "react-router-dom";
const ProjectSection = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Card align="center" w="95%" boxShadow="dark-lg" bg="purple.300" mb={5}>
        <CardHeader>
          <Heading size="md" fontSize={"2xl"}>
            Projects
          </Heading>
        </CardHeader>
      </Card>
      {projects.projects.map((project, index) => (
        <Card key={index} align="center" w="95%" boxShadow="dark-lg" mb={5}>
          <CardHeader fontSize="xl" pb={0}>
            {project.name}
          </CardHeader>
          <Link to={project.link} style={{ fontWeight: 400 }}>
            <em>{project.clicktext}</em>
          </Link>
          <CardBody padding="5px 20px">
            <Text>Description:</Text>
            <Text fontWeight={400}>{project.description}</Text>
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
                {project.techstack.map((stack) => (
                  <ListItem fontWeight={400}>{stack}</ListItem>
                ))}
              </UnorderedList>
            </Collapse>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};

export default ProjectSection;
