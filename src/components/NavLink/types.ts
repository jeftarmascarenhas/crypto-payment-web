import { LinkProps } from '@chakra-ui/react'
import React from 'react'

export interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode
  to: string
  activeProps?: LinkProps
  _hover?: LinkProps
}
