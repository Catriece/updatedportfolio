import React, { FC } from "react";
import { Flex, Grid, useMediaQuery } from "@chakra-ui/react";

interface Languages {
  height: string;
  width: string;
}

const LanguagesComponent: FC<Languages> = ({ height, width }) => {
  const skills = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      alt: "Github",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      alt: "MySQL",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "NodeJS",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      alt: "React",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express",
    },
  ];

  return (
    <Grid
    // sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Flex>
        {skills.map((skill, index) => {
          return (
            <>
              <img
                key={index}
                src={skill.img}
                alt={skill.alt}
                style={{
                  height: height,
                  width: width,
                  margin: "5px",
                  border: "1px solid #fff",
                  padding: "5px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                }}
              />
            </>
          );
        })}
      </Flex>
    </Grid>
  );
};

export default LanguagesComponent;
