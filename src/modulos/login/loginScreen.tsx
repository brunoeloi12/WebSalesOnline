import Input from '../../shered/inputs/input';
import {
  BackgrounImage,
  ContainerLoginLeft,
  BodyLogin,
  LogoLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <BodyLogin>
      <BackgrounImage src="../../../public/background.png" />
      <ContainerLoginLeft>
        <LogoLogin src="../../../public/logoLogin.svg" />
        <Input title="Usuario" />
        <Input title="Senha" />
      </ContainerLoginLeft>
    </BodyLogin>
  );
};

export default LoginScreen;
