import Input from '../../shered/inputs/Input';
import Button from '../../shered/buttons/button';
import {
  BackgrounImage,
  ContainerLoginLeft,
  BodyLogin,
  LogoLogin,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <BodyLogin>
      <BackgrounImage src="../../../public/background.png" />
      <ContainerLoginLeft>
        <LogoLogin src="../../../public/logoLogin.svg" />
        <TitleLogin level={2} type="secondary">
          LOGIN
        </TitleLogin>
        <Input title="Usuario" />
        <Input title="Senha" />
        <Button type="primary" margin="20px 0px 16px 0px">
          Entrar
        </Button>
      </ContainerLoginLeft>
    </BodyLogin>
  );
};

export default LoginScreen;
