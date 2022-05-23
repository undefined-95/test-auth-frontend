import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../redux/features/user';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.users.token);
  const loading = useSelector((state) => state.users.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    dispatch(auth(email, password));
    token && navigate('/people');
  };

  const handleClick = () => setShow(!show);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Почта</FormLabel>
        <Input
          value={email}
          placeholder="Введите эл. адрес"
          onChange={handleEmail}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Пароль</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? 'text' : 'password'}
            placeholder="Введите пароль"
            onChange={handlePassword}
          />
          <InputRightElement width="4.5rem">
            <Button border="5rem" h="1.rem" size="sm" onClick={handleClick}>
              {show ? 'скрыть' : 'показать'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        isLoading={loading}
        onClick={handleSubmit}
      >
        Войти
      </Button>
    </VStack>
  );
};

export default Login;
