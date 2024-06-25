import React from "react";
import img from "../assets/about-me.png";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
//import Heading from "../../components/heading";

const AboutPage = () => {
  const [ISLARGERTHAN750] = useMediaQuery("(min-width: 750px)");

  return (
    <Flex
      flexDirection={ISLARGERTHAN750 ? "row" : "column"}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Flex
        style={
          ISLARGERTHAN750
            ? { width: "40%", justifyContent: "center", alignItems: "center" }
            : { width: "90%", justifyContent: "center", alignItems: "center" }
        }
      >
        <img
          src={img}
          alt="catriece"
          style={{
            width: "90%",
            maxWidth: "265pt",
            padding: "10px",
            height: "500px",
            left: "20px",
          }}
        />
      </Flex>

      <Box
        style={
          ISLARGERTHAN750
            ? {
                width: "60%",
                overflowY: "auto",
              }
            : {}
        }
      >
        <h1
          style={{
            marginBottom: "0px",
            marginTop: "0px",
            textAlign: "center",
            fontFamily: "Bebas Neue",
            fontSize: "48px",
            letterSpacing: "1rem",
            color: "white",
          }}
        >
          HEY YOU!
        </h1>

        <p
          style={{
            lineHeight: "2rem",
            width: "80%",
            padding: "7px",
            fontSize: "17px",
            color: "white",
            marginBottom: 20,
            marginLeft: "40pt",
          }}
        >
          <b>I am Catriece, S.D. (Software Developer 🤭).</b> <br />I have a
          knack for turning code into captivating online experiences and I've
          been hooked on this web development thing since my first line of code.{" "}
          <br /> <br />I have a strong foundation in HTML, CSS, and JavaScript
          and work well with JS libraries like React. I{" "}
          <i>
            <b>love</b>
          </i>{" "}
          mastering new technologies to amplify my creativity. But for me, it's
          not just about the code – it's about you! <br />
          <br />
          I'm committed to delivering you top-notch results that will exceed
          expectations. My goal is simple:{" "}
          <i>craft digital solutions that'll leave a lasting impact</i>. Let's
          turn your dreams into reality together. Explore my portfolio and get
          in touch!
          <br />
          <br />
          Cheers to pixels, passion, and a limitless digital world! 🚀
        </p>
      </Box>
    </Flex>
  );
};

export default AboutPage;
