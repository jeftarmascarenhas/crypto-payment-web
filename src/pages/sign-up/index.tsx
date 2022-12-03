import { LayoutPage } from "next";
import SignUpScreen from "@modules/auth/screens/SignUp";
import Auth from "@layouts/Auth";
import Head from "next/head";

const SignUp: LayoutPage = () => {
  return (
    <>
      <Head>
        <title>Crypto Pay - Register</title>
      </Head>
      <SignUpScreen />
    </>
  );
};

SignUp.getLayout = (page) => <Auth>{page}</Auth>;

export default SignUp;
