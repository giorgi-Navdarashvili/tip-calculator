import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

`

const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    color: #5E7A7D;
`

const Warning = styled.span`
    display: ${({showWarning}) => showWarning? "inline": "none"};
    color: #E17457;
    
`

export const SectionHeader = ({value, showWarning}) => (
    <Wrapper>
        <Title>{value}</Title>
        <Warning showWarning={showWarning}>Can't be zero</Warning>
    </Wrapper>
);