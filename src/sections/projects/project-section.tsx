import {
  Card,
  Grid,
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
  const { isOpen: openTech, onToggle: toggleTech } = useDisclosure();
  const { isOpen: openDesc, onToggle: toggleDesc } = useDisclosure();
  return (
    <Flex w={"100%"} justifyContent="space-between" flexWrap={"wrap"}>
      {projects.projects.map((project, index) => (
        <Card
          key={index}
          width={"210pt"}
          height={"150pt"}
          boxShadow="dark-lg"
          textAlign="center"
          margin={3}
        >
          <CardHeader fontSize="xl" pb={0}>
            {project.name}
          </CardHeader>
          <Link to={project.link} style={{ fontWeight: 400 }}>
            <em>{project.clicktext}</em>
          </Link>
          <CardBody padding="5px 20px">
            <Text
              paddingTop="10px"
              fontWeight={600}
              textAlign="center"
              onClick={toggleDesc}
            >
              View Description
            </Text>
            <Collapse in={openDesc} animateOpacity>
              <Text fontWeight={400}>{project.description}</Text>
            </Collapse>
          </CardBody>
          <Text
            paddingTop="10px"
            fontWeight={600}
            textAlign="center"
            onClick={toggleTech}
          >
            Click here to view techstack
          </Text>
          <CardFooter w="100%">
            <Collapse in={openTech} animateOpacity>
              <UnorderedList w="100%">
                {project.techstack.map((stack, index) => (
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

export default ProjectSection;
