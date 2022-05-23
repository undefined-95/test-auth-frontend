import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/features/user';
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import './ListUsers.css';

const ListUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="main-list-users">
      {users?.map((item) => {
        return (
          <Box
            maxW={'270px'}
            w={'full'}
            bg="white"
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            className="card"
          >
            <Image
              h={'120px'}
              w={'full'}
              src={
                'https://img3.akspic.ru/previews/6/2/1/3/5/153126/153126-smartfon_micromax-cvetovoj_gradient-cvet-krasochnost-rozovyj-360x640.jpg'
              }
              objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'xl'}
                src={item.pic}
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {item.name}
                </Heading>
                <Text color={'gray.500'}>{item.email}</Text>
              </Stack>

              <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>{item.birthDate}</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Дата рождения
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>{item.sex}</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Пол
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default ListUsers;
