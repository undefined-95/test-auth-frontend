import React, { useEffect } from 'react';
import { Box, Heading, Text, VStack, WrapItem } from '@chakra-ui/react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/features/user';

const Profile = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.users.profile);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    !loading && dispatch(getProfile());
  }, []);

  return (
    <WrapItem>
      {profile?.map((item) => {
        return (
          <Box>
            <Heading className="Text">Профиль</Heading>
            <Text
              mt={{ sm: 3, md: 3, lg: 5 }}
              color="gray.500"
              className="Text"
            >
              <p className="text-paragraph">Имя:</p> {item.name}
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack pl={0} spacing={3} alignItems="flex-start">
                <Text
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  className="Text"
                >
                  <p className="text-paragraph">Эл. адрес:⠀</p> {item.email}
                </Text>
                <Text
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  className="Text"
                >
                  <p className="text-paragraph">Дата рождения:⠀</p>{' '}
                  {item.birthDate}
                </Text>
                <Text
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  className="Text"
                >
                  <p className="text-paragraph"> Пол:⠀</p> {item.sex}
                </Text>
              </VStack>
            </Box>
          </Box>
        );
      })}
    </WrapItem>
  );
};

export default Profile;
