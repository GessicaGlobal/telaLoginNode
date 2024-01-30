import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useRoutes } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

// Fazendo lógica de redirecionamento encapsulada
export const AppRoutes:React.FC = () => {
  
  const { token } = useAuth();
const routes = token ? protectedRoutes : publicRoutes;
const element = useRoutes([...routes]);

return <>{element}</>;
};
