import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { NavLink } from "react-router-dom"
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
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import TopOfferBanner from "../Components/TopOfferBanner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function LoginPage() {
  const {userData}=useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  let user=JSON.parse(localStorage.getItem("registeredUser")) || 0;


  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }
  function handleLogin(){
  user.map((item)=>{
    if(item.Email===email&&item.Password===password){
      setError(true)
      setTimeout(()=>{
        setError(false);
      },1500)
    }
  })
}
  // console.log(user)
 
  return (
    <>
    {/* <TopOfferBanner/> */}
    <Navbar/>
    <Container mt="180px" mb="50px">
      <Center mt="20px" mb="60px">
        <Heading fontSize="3xl">Login</Heading>
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
            Facebook Login
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
            Google Login
          </Text>
        </Flex>
      </Stack>

      <Box ml="47px" w="390px">
        <Text mb="10px" fontWeight="semibold" fontSize="xl">
          Email
        </Text>
        <Input onChange={handleEmail} mb={8} h="55px" type="email" placeholder="Enter Email" />
        <Flex mb="10px" justifyContent="space-between">
          <Text fontWeight="semibold" fontSize="xl">
            Password
          </Text>
          <Text cursor="pointer">Forgot ?</Text>
        </Flex>
        <Input onChange={handlePassword} mb={8} h="55px" type="password" placeholder="Email Password" />
        {password.length===1||password.length===2||password.length===3?<Alert status='error'>
        <AlertIcon />Must be more than 3 characters</Alert>:""}
        <br />

        <Button
          onClick={handleLogin}
          _hover="none"
          borderRadius="1px"
          bg="#3c3c3c"
          color={"white"}
          w="390px"
        >
          Sign in
        </Button>
        {error?
        <Alert mt="10px" status='success' variant='top-accent'>
          <AlertIcon />
            Login Successfull
        </Alert>:""}
      <NavLink to="/signup"><Text mt="50px" ml="65px">Don't have an account? Sign up here.</Text></NavLink>

      </Box>
    </Container>
      <Footer/>
    </>
  );
}
export default LoginPage;
