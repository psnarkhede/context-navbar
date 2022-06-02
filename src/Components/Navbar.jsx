import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Details from "./Details";
import { Button, ButtonGroup, StylesProvider } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import Styles from "./Navbar.module.css";

const Navbar = () => {

  const[creds, setCreds] = useState({})


  const { value, isAuth, toggleAuth, data } = useContext(AuthContext);


  const handlechange = (e) => {
    let {name,value} = e.target;

    setCreds({...creds,[name]:value})
  }

  const handlesubmit = (inputcreds) => {
    setCreds(inputcreds);

    isAuth(creds,value);
  }


/*useEffect(() => {
  console.log(creds);
},[creds])*/
  return (
    <div >
      <div>
      <Breadcrumb separator="" border="1px solid black" display="flex" w="90%" margin="auto" >
        <BreadcrumbItem >
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem marginLeft="630px" isCurrentPage>
        <Details data={data} />
        </BreadcrumbItem> 
      </Breadcrumb>
      </div>

      <div className={Styles.inputbox}>
          <input className={Styles.name} type="text"  placeholder="Phone / Email" name="userid" onChange={handlechange}/>

          <input className={Styles.pass} type="password" placeholder="Password" name="password" onChange={handlechange}/>
        
          <Button
          colorScheme="teal"
          size="sm"
          onClick={() => (handlesubmit(creds), toggleAuth(value), isAuth(value))}
        >
          {value}
        </Button>
      </div>
      
    </div>
  );
};

export default Navbar;
