import { VStack } from "@chakra-ui/react";
import AuthHeader from "@layouts/Auth/components/Header";
import { Props } from "./types";

export default function Auth({ children }: Props) {
  return (
    <VStack
      px="16"
      py={4}
      align="stretch"
      overflowY="auto"
      height="100%"
      width="100%"
    >
      <AuthHeader />
      {children}
    </VStack>
  );
}
