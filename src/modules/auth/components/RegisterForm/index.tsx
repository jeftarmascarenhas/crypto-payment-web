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
import { FormData } from "./types";

const schema = yup.object({
  name: yup.string().required("required").min(3, "min 3 letters"),
  email: yup.string().required("required").email("email invalid"),
  password: yup.string().required("required").min(6, "min 6 letters"),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password")], "not match password"),
});

export default function RegisterForm() {
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
        <FormControl isInvalid={!!errors.name}>
          <Input
            placeholder="Name"
            type="text"
            {...register("name", { required: "Required" })}
          />
          {!!errors.name && (
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          )}
        </FormControl>
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
            type="password"
            placeholder="Password"
            {...register("password", { required: "Required" })}
          />
          {!!errors.password && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.confirmPassword}>
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: "Required" })}
          />
          {!!errors.confirmPassword && (
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
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
          Register
        </Button>
      </VStack>
    </form>
  );
}
