import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { register } from '../../redux/features/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.users.loading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setbirthDate] = useState(null);
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState();
  const [sex, setSex] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleBirthDate = (e) => {
    setbirthDate(e.target.value);
  };
  const handlePic = (e) => {
    setPic(e.target.value);
  };
  const handleSex = (e) => {
    setSex(e.target.value);
  };

  const handleClick = () => setShow(!show);

  const handleSubmit = () => {
    !loading &&
      dispatch(register({ email, password, name, birthDate, sex, pic }));
    navigate('/login');
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Имя</FormLabel>
        <Input value={name} placeholder="Введите имя" onChange={handleName} />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Почта</FormLabel>
        <Input
          value={email}
          placeholder="Введите эл. адрес"
          onChange={handleEmail}
        />
      </FormControl>

      <FormControl id="birthDate" isRequired>
        <FormLabel>Дата рождения</FormLabel>
        <Input type="date" value={birthDate} onChange={handleBirthDate} />
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Изображение</FormLabel>
        <Input
          value={pic}
          placeholder="Вставьте ссылку на изображение"
          onChange={handlePic}
        />
      </FormControl>

      <FormControl id="sex" isRequired>
        <FormLabel>Пол</FormLabel>
        <RadioGroup>
          <Stack direction="row" onChange={handleSex}>
            <Radio colorScheme="red" value="Муж.">
              муж.
            </Radio>
            <Radio colorScheme="green" value="Жен.">
              жен.
            </Radio>
          </Stack>
        </RadioGroup>
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
        Зарегистрироваться
      </Button>
    </VStack>
  );
};

export default SignUp;
