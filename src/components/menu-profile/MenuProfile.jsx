import React, { useEffect } from 'react';
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, logOut } from '../../redux/features/user';
import { Link, useNavigate } from 'react-router-dom';
import './MenuProfile.css';

const MenuProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state) => state.users.profile);

  useEffect(() => {
    if (!profile?.length) {
      dispatch(getProfile());
    }
  }, []);

  const handleProfile = () => {
    navigate('/account');
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Menu>
      <MenuButton>
        {profile?.map((item) => {
          return <Avatar name={item.name} src={item.pic} />;
        })}
      </MenuButton>
      <MenuList style={{ color: '#252628' }}>
        <MenuItem onClick={handleProfile}>Изменить профиль</MenuItem>
        <Link to="/login">
          <MenuItem onClick={handleLogout}>Выход</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MenuProfile;
