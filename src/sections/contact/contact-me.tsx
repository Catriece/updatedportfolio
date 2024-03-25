import {
  Flex,
  Text,
  Input,
  FormLabel,
  Box,
  Textarea,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [ISLARGERTHAN975] = useMediaQuery("(min-width: 975px)");
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="3521939f-e43e-4dbd-b466-a9c4b09d321c"
        />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <input type="hidden" name="from_name" value="Catriece's Portfolio" />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <Flex
          height={"80vh"}
          flexDirection={ISLARGERTHAN975 ? "row" : "column"}
          alignItems={"center"}
        >
          <Box mr={ISLARGERTHAN975 ? 20 : 0} w={ISLARGERTHAN975 ? "" : "100%"}>
            <Text
              justifySelf={"flex-start"}
              fontSize={"3xl"}
              fontWeight={700}
              color="#fff"
            >
              Contact me
            </Text>
            <Text color={"#fff"} fontSize={"lg"} mb={3}>
              <i>
                I'm excited to hear from you! <br />
                Let's turn those <b>dreams</b> into <b>code</b>!
              </i>
            </Text>

            <FormLabel color="#fff">Email*</FormLabel>
            <Input
              type="email"
              bg={"white"}
              name="email"
              className="contact field"
              mb={3}
              required
            />
            <FormLabel color="#fff">Name*</FormLabel>
            <Input
              type="text"
              bg={"white"}
              name="First Name"
              className="contact field"
              mb={3}
              required
            />
            <FormLabel color="#fff">Phone Number (optional)</FormLabel>
            <Input
              type="text"
              bg={"white"}
              name="Phone Number"
              className="contact field"
              mb={3}
            />
          </Box>
          <Box>
            <FormLabel color="#fff">Message:</FormLabel>
            <Textarea
              name="message"
              className="contact msg"
              bg="white"
              minHeight="180px"
              required
              mb={5}
            />

            <Button variant="primary" width="100%" type="submit">
              Submit
            </Button>
          </Box>
          <br />
        </Flex>
      </form>
    </Flex>
  );
};

export default ContactForm;
