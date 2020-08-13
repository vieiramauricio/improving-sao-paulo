import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, FormControl, TextField } from '@material-ui/core';
import Outside from '../../layouts/Outside';
import Title from '../../components/Title';
import ButtonWrapper from '../../components/Button';
import { CallToPage } from './styles';
import MessageWrapper from '../../components/MessageWrapper';
import ValidateMessage from '../../components/ValidateMessage';
import FormData from '../../contracts/FormData';

const Login: React.FC = () => {
  const { control, handleSubmit, errors, reset } = useForm();

  const handleForm = (data: FormData): void => {
    console.log(data);
    reset();
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
              name="user"
              label="Usuário"
              variant="outlined"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 3, maxLength: 30 }}
              style={
                errors.user && {
                  borderColor: '#ff0000',
                }
              }
            />
            <MessageWrapper>
              {errors.user && (
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
          <span> clique aqui!</span>
        </CallToPage>
      </Box>
    </Outside>
  );
};

export default Login;