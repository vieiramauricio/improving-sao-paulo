import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Box, FormControl, TextField } from '@material-ui/core';
import Outside from '../../layouts/Outside';
import Title from '../../components/Title';
import ButtonWrapper from '../../components/Button';
import {
  MessageWrapper,
  ValidateMessage,
  CallToPage,
} from '../../components/Message';

import IFormData from '../../interfaces/Form/data.interface';
import api from '../../services/api';

import { AuthStore } from '../../context/Auth';
import { login } from '../../context/Auth/actions';

const Login: React.FC = () => {
  const { control, handleSubmit, errors, reset } = useForm();
  const { state, dispatch } = useContext(AuthStore);

  const handleForm = async (data: IFormData) => {
    try {
      const res = await api.post('/login', data);
      if (res.data.token) {
        console.log(res);
        login(dispatch, {
          token: res.data.token,
          signed: true,
        });
      }
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Outside>
      <Box component="div" m={1}>
        <Title>
          Pronto para
          <span> melhorar São Paulo?</span>
        </Title>

        <Box component="form" onSubmit={handleSubmit(handleForm)}>
          <FormControl fullWidth variant="outlined">
            <Controller
              as={TextField}
              type="text"
              name="username"
              label="Usuário"
              variant="outlined"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3, maxLength: 30 }}
            />
            <MessageWrapper>
              {errors.username && (
                <ValidateMessage>
                  Mínimo 3 e máximo 30 caracteres!
                </ValidateMessage>
              )}
            </MessageWrapper>
          </FormControl>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <Controller
                as={TextField}
                type="password"
                name="password"
                label="Senha"
                variant="outlined"
                control={control}
                defaultValue=""
                rules={{ required: true, minLength: 8, maxLength: 30 }}
              />
              <MessageWrapper>
                {errors.password && (
                  <ValidateMessage>
                    Mínimo 8 e máximo 30 caracteres!
                  </ValidateMessage>
                )}
              </MessageWrapper>
            </FormControl>
          </Box>

          <Box component="div" mt={2} mb={1}>
            <ButtonWrapper color="primary" size="100%">
              Login
            </ButtonWrapper>
          </Box>
        </Box>

        <CallToPage>
          Não tem cadastro ainda?
          <Link to="/register">
            <span> clique aqui!</span>
          </Link>
        </CallToPage>
      </Box>
    </Outside>
  );
};

export default Login;
