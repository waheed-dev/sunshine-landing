import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Hero = () => {
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h={{
        base: '560px',
        md: '640px',
      }}
      bgImage="url(https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.700',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center flexDirection="column" textAlign="center" color="white" h="full">
          <Heading size="2xl" fontWeight="extrabold">
            we'll hold your hand
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          </Text>
          <LightMode>
            <Button colorScheme="blue" size="lg" mt="6" fontWeight="bold" fontSize="md">
              Become a part
            </Button>
          </LightMode>
        </Center>
      </Box>
      <Box
        display={{
          base: 'none',
          md: 'block',
        }}
        position="absolute"
        zIndex={2}
        w="full"
        bottom="0"
        py="4"
        bg="blackAlpha.400"
      >
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
        >
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
          >
            <Box textAlign="center" color="white">
              <Text>Members</Text>
              <Text fontSize="3xl">10,000</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Text>Locations</Text>
              <Text fontSize="3xl">10</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Text>Price Range</Text>
              <Text fontSize="3xl">$5k - $12K</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
