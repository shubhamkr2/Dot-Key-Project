import React from "react";
import {
  Center,
  Heading,
  Stack,
  Image,
  Input,
  Container,
  Box,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

function SignupPage() {

  return (
    <Container>
      <Center mt="20px" mb="55px">
        <Heading fontSize="3xl">Create Account</Heading>
      </Center>
      <Stack w="390px" m={"auto"} mb="35px">
        <Flex cursor="pointer" mb="-5px" border="1px" borderColor="gray.200" bg={"#385899"}>
          <Image
            boxSize="42px"
            objectFit="cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/768px-F_icon.svg.png"
            alt="facebook"
          />
          <Text m={"auto"} color={"white"}>
            Facebook Signup
          </Text>
        </Flex>
        <Flex cursor="pointer" border="1px" borderColor="gray.200" bg={"#c33422"}>
          <Image
            boxSize="42px"
            objectFit="cover"
            src="https://beginnersbook.com/wp-content/uploads/2013/09/Google-plus-icon-300x300.png"
            alt="google"
          />
          <Text m={"auto"} color={"white"}>
            Google Signup
          </Text>
        </Flex>
      </Stack>

      <Box ml="47px" w="390px">
        <Text mb="10px" fontWeight="semibold" fontSize="ml">
          FIRST NAME
        </Text>
        <Input mb={8} h="55px" type="email" placeholder="Enter First Name" />
        <Text mb="10px" fontWeight="semibold" fontSize="ml">
          LAST NAME
        </Text>
        <Input mb={8} h="55px" type="email" placeholder="Enter Last Name" />
        <Text mb="10px" fontWeight="semibold" fontSize="ml">
          Email
        </Text>
        <Input mb={8} h="55px" type="email" placeholder="Enter Email" />
          <Text mb="10px" fontWeight="semibold" fontSize="ml">
            Password
          </Text>
        <Input mb={8} h="55px" type="password" placeholder="Email Password" />
        <br />

        <Button
          _hover="none"
          borderRadius="1px"
          bg="#3c3c3c"
          color={"white"}
          w="390px"
        >
          Create
        </Button>
      </Box>
    </Container>
  );
}
export default SignupPage;
