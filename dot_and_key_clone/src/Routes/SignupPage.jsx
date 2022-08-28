import React, {useContext, useState} from "react";
import {AppContext} from "../Context/AppContextProvider"
import { useNavigate , NavLink } from "react-router-dom"
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
  AlertIcon,
} from "@chakra-ui/react";
import TopOfferBanner from "../Components/TopOfferBanner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const initialData={
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: ""
}

function SignupPage() {
const [regUserData, setRegUserData] = useState(initialData)
const {userData, setUserData}=useContext(AppContext)
// const [userData, setUserData] = useState([])
const [error, setError] = useState(true)
const [success, setSuccess] = useState(false);

const handlechange = (e) =>{
  const {name:key, value} = e.target;
  setRegUserData({
  ...regUserData,
  [key]: value
  
});

if(regUserData.Firstname.length<=1||regUserData.Lastname.length<=1||regUserData.Email.length<=1||regUserData.Password.length<=3){
  setError(true);
}
else{
  setError(false);
}
}
function handleregister(){
  setUserData([...userData,regUserData]);
  localStorage.setItem("registeredUser", JSON.stringify(userData));
  setRegUserData(initialData);
  setSuccess(true);
  setTimeout(()=>{
    setSuccess(false);
    // navigate("/login")
  },1500)
}

console.log(userData)
  return (
    <>
    {/* <TopOfferBanner/> */}
    <Navbar/>
    <Container mt="180px" >
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
        <Input onChange={handlechange} value={regUserData.Firstname} name="Firstname" h="55px" type="email" placeholder="Enter First Name" />
        {regUserData.Firstname.length===1?<Alert status='error'>
        <AlertIcon />Please enter a valid name</Alert>:""}
        
        <Text mt={8} mb="10px" fontWeight="semibold" fontSize="ml">
          LAST NAME
        </Text>
        <Input onChange={handlechange} value={regUserData.Lastname} name="Lastname" h="55px" type="email" placeholder="Enter Last Name" />
        {regUserData.Lastname.length===1?<Alert status='error'>
        <AlertIcon />Please enter a valid name</Alert>:""}
        
        <Text mt={8} mb="10px" fontWeight="semibold" fontSize="ml">
          Email
        </Text>
        <Input onChange={handlechange} value={regUserData.Email} name="Email" h="55px" type="email" placeholder="Enter Email" />
        
        <Text mt={8} mb="10px" fontWeight="semibold" fontSize="ml">
          Password 
        </Text>
        <Input onChange={handlechange} value={regUserData.Password} name="Password" h="55px" type="password" placeholder="Email Password" />
        {regUserData.Password.length===1||regUserData.Password.length===2||regUserData.Password.length===3?<Alert status='error'>
        <AlertIcon />Must be more than 3 characters</Alert>:""}
        <br />
        <Button
          mt={8}
          disabled={error}
          onClick={handleregister}
          _hover="none"
          borderRadius="1px"
          bg="#3c3c3c"
          color={"white"}
          w="390px"
        >
          Create
        </Button>
      {success?
        <Alert mt="10px" status='success' variant='top-accent'>
          <AlertIcon />
            Registration Successfull
        </Alert>:""}
      <NavLink to="/login"><Text mb="20px" mt="50px" ml="65px">Have an account? Login here.</Text></NavLink>
      </Box>
    </Container>
    <Footer/>
    </>
  );
}
export default SignupPage;
