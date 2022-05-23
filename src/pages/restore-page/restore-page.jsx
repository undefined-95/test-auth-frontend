import React from 'react';
import { Container, Flex, Box, Wrap } from '@chakra-ui/react';
import Profile from '../../components/profile-restore/Profile';
import RestoreProfile from '../../components/profile-restore/RestoreProfile';
import Header from '../../components/header/Header';

export const RestorePage = () => {
  return (
    <>
      <Header />
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <Profile />
                <RestoreProfile />
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
