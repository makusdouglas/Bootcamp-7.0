import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { singOut } from '../../store/modules/auth/actions';
import AvatarInput from './AvatarInput';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(singOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de Senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do Gobarber
      </button>
    </Container>
  );
}

export default Profile;
