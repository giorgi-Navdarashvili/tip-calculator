import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.56rem;
    margin-bottom: 25px;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #FFFFFF;
`
const Amount = styled.span`
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    text-align: right;
    color: #26C2AE;
`

const Desc = styled.span`
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    color: #7F9D9F;
`

export const AmountAndDescription = ({ title, amount = "$0" }) => (
    <Wrapper>
        <div>
            <Title>{title}</Title>
            <Desc>/ person</Desc>
        </div>
        <Amount>{(Math.round(amount * 100) / 100).toFixed(2)}</Amount>


    </Wrapper>
)