import RegisterForm from "@auth//components/RegisterForm";
import { SimpleGrid, VStack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function SignUp() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20" py="8">
      <VStack
        align="stretch"
        spacing="8"
        justify="center"
        order={{ base: 1, md: 0 }}
      >
        <Box mb="6">
          <Text as="h2" fontWeight="bold" fontSize="3xl">
            Register
          </Text>
          <Text as="h3" fontSize="md" fontWeight="medium" color="gray">
            Crypto Payments is a solution that allows companies and online
            stores to receive their payments in cryptocurrencies.
          </Text>
        </Box>
        <RegisterForm />
      </VStack>
      <Image
        src="/images/coins.png"
        width={675}
        height={669}
        alt="Image coins Register"
      />
    </SimpleGrid>
  );
}
