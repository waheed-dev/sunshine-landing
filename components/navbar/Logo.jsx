import {Box, chakra, Heading, Text, useToken} from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
      <Box display={'flex'}>


          <Heading fontSize={['md','md','lg','3xl']}>sunshine home care</Heading>

      </Box>
  )
}
