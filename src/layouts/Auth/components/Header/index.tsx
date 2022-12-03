import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function AuthHeader() {
  return (
    <HStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold" flex={1}>
        Crypto Payments
      </Text>
      <HStack spacing={6}>
        <Link href="/">
          <Text>Register</Text>
        </Link>
        <Link href="/">
          <Text>Login</Text>
        </Link>
      </HStack>
    </HStack>
  );
}
