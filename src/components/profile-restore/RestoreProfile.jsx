import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  WrapItem,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser } from '../../redux/features/user';

const RestoreProfile = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.users.profile);
  const loading = useSelector((state) => state.users.loading);

  const [name, setName] = useState(profile?.name);
  const [email, setEmail] = useState(profile?.email);
  const [birthDate, setbirthDate] = useState(profile?.birthDate);
  const [sex, setSex] = useState(profile?.sex);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlebirthDate = (e) => {
    setbirthDate(e.target.value);
  };
  const handleSex = (e) => {
    setSex(e.target.value);
  };

  const handleEdit = () => {
    if (!loading) {
      dispatch(restoreUser({ name, email, sex, birthDate }));
      window.location.reload();
    }
  };

  return (
    <WrapItem>
      <Box bg="white" borderRadius="lg">
        <Box m={8} color="#0B0E3F">
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Имя</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none" />
                <Input
                  type="text"
                  size="md"
                  value={name}
                  onChange={handleName}
                  placeholder="Введите новое имя"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Эл. адрес</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none" />
                <Input
                  type="text"
                  size="md"
                  placeholder="Введите новый эл. адрес"
                  value={email}
                  onChange={handleEmail}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Дата рождения</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none" />
                <Input
                  type="date"
                  size="md"
                  value={birthDate}
                  onChange={handlebirthDate}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Пол</FormLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row" onChange={handleSex}>
                  <Radio colorScheme="red" value="Муж.">
                    Муж.
                  </Radio>
                  <Radio colorScheme="green" value="Жен.">
                    Жен.
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl id="name" float="right">
              <Button
                variant="solid"
                bg="#0D74FF"
                color="white"
                onClick={handleEdit}
              >
                Изменить
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    </WrapItem>
  );
};

export default RestoreProfile;
