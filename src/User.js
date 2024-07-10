import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/Page.css';

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>Perfil do usuário com ID: {id}</p>
    </div>
  );
};

export default User;
