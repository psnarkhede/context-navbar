import React, { useContext } from "react";
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
  const { value, isAuth, toggleAuth, data } = useContext(AuthContext);
  return (
    <div >
      <Breadcrumb separator="" border="1px solid black" display="flex" w="90%" margin="auto" >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem marginLeft="650px" isCurrentPage>
        <Details data={data} />
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={() => (toggleAuth(value), isAuth(value))}
        >
          {value}
        </Button>
        </BreadcrumbItem>
      </Breadcrumb>

      
    </div>
  );
};

export default Navbar;
