import styled from 'styled-components'

import { preventIllegalCharacters } from '../utils';

const Wrapper = styled.div`
    background-color: #F3F9FA;
    border: ${({ showWarning }) => showWarning ? "solid 1px red" : ""};
    border-radius: 5px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.375rem;
`;

const Input = styled.input`
    text-align: right;
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #00474B;
    margin-right: 1rem;
`;

const InputIcon = styled.img`
    height: 1.06rem;
    margin-left: 1.18rem;
`;



export const UserInput = ({ icon, value, setValue, showWarning }) => (
    <Wrapper showWarning={showWarning}>
        <InputIcon src={icon} />
        <Input
            type='number'
            onPaste={e => e.preventDefault()}
            onWheel={e => e.target.blur()}
            placeholder='0'
            onKeyPress={preventIllegalCharacters}
            min='0'
            onChange={e => setValue(e.target.value)}
            value={value}
        />
    </Wrapper>
);