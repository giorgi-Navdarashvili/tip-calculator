import logo from '../assets/logo.svg'
import styled from 'styled-components';

const AppLogo = styled.img`
    content: url('${logo}');
    margin-top: 3.125rem;
`

export const Logo = () => (
    <AppLogo />
);