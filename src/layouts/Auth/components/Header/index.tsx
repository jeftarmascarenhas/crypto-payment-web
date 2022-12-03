import { HStack, Text } from "@chakra-ui/react";
import { ROUTES } from "@configs/routes";
import NavLink from "@global-components/NavLink/nav-link";
import React from "react";

export default function AuthHeader() {
  return (
    <HStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold" flex={1}>
        Crypto Payments
      </Text>
      <HStack spacing={6}>
        <NavLink to={ROUTES.PUBLIC.SIGNUP}>
          <Text>Register</Text>
        </NavLink>
        <NavLink to={ROUTES.PUBLIC.SIGNIN}>
          <Text>Login</Text>
        </NavLink>
      </HStack>
    </HStack>
  );
}
