import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormData } from "./type";

const schema = yup.object({
  email: yup.string().required("required").email("email invalid"),
  password: yup.string().required("required"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack spacing="8">
        <FormControl isInvalid={!!errors.email}>
          <Input
            placeholder="Email"
            type="email"
            {...register("email", { required: "Required" })}
          />
          {!!errors.email && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <Input
            placeholder="Password"
            {...register("password", { required: "Required" })}
          />
          {!!errors.password && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          value="submit"
          variant="primary"
          size="lg"
          width="100%"
          // isDisabled={!isDirty || !isValid}
        >
          Enter
        </Button>
      </VStack>
    </form>
  );
}
