import React from 'react';
import { Box, FormControl, TextField } from '@material-ui/core';
import Outside from '../../layouts/Outside';
import Title from '../../components/Title';
import ButtonWrapper from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Outside>
      <Box component="div" m={1}>
        <Title>
          Pronto para
          <span> melhorar São Paulo?</span>
        </Title>

        <Box component="div">
          <FormControl fullWidth variant="outlined">
            <TextField id="nome" label="Usuário" variant="outlined" />
          </FormControl>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <TextField id="nome" label="Senha" variant="outlined" />
            </FormControl>
          </Box>

          <Box component="div" mt={2}>
            <ButtonWrapper color="primary" size="100%">
              Login
            </ButtonWrapper>
          </Box>
        </Box>
      </Box>
    </Outside>
  );
};

export default Login;
