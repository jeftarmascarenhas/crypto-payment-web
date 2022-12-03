import LoginForm from "@modules/auth/components/LoginForm";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function SignIn() {
  return (
    <VStack align="center" height="full" pt="20">
      <VStack align="stretch" width="full" maxW="400px">
        <Box mb="2">
          <Text as="h2" fontWeight="bold" fontSize="3xl">
            Login
          </Text>
          <Text as="h3" fontSize="md" fontWeight="medium" color="gray">
            Accept Crypto Currencies.
          </Text>
        </Box>
        <LoginForm />
        <HStack justify="flex-end" align="center">
          <Link href="/">
            <Text fontSize="md" fontWeight="bold" color="gray">
              Forgot your password?
            </Text>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
}
