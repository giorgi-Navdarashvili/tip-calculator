import styled from 'styled-components';
import { AmountAndDescription } from './AmountAndDescription';

const Wrapper = styled.div`
    background-color: #00474B;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 3rem;
    @media only screen and (min-width: 1440px) {
        width: 100%;
        margin-left: 3rem;
        justify-content: space-between;
    }
`;

const Reset = styled.button`
    background-color: ${({ calculated }) => calculated ? '#26C2AE' : '#0D686D'};
    border: none;
    color: 00474B;
    opacity: 0.35;
    padding: 0.75rem 0;
    border-radius: 5px;
    margin-top: 2rem;
    margin-bottom: 40px;
    :hover {
        background-color: #9FE8DF;
        cursor: pointer;
        opacity: 1;
    }
`


export const Result = ({ reset, tipAmount, totalAmount }) => {
    const calculated = tipAmount !== 0 && totalAmount !== 0;
    return (
        <Wrapper>
            <div>
                <AmountAndDescription title="Tip Amount" amount={tipAmount} />
                <AmountAndDescription title="Total" amount={totalAmount} />
            </div>
            <Reset calculated={calculated} onClick={() => reset()}>Reset</Reset>
        </Wrapper>
    );
}