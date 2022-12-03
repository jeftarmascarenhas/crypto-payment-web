import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";

function NavLink({ to, activeProps, children, _hover, ...rest }: NavLinkProps) {
  const router = useRouter();
  console.log(router.pathname, to);
  const isActive = router.pathname == to;

  if (isActive) {
    return (
      <Link href={to}>
        <ChakraLink
          fontSize="md"
          fontWeight="semibold"
          {...rest}
          {...activeProps}
          _hover={{ color: "blackAlpha.600" }}
        >
          {children}
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={to}>
      <ChakraLink
        fontSize="md"
        fontWeight="normal"
        {...rest}
        _hover={{ color: "blackAlpha.600" }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
