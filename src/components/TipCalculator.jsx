import styled from 'styled-components';
import { SectionHeader } from './SectionHeader';
import { UserInput } from './UserInput';
import { PersentagesList } from './PersentagesList';
import { Result } from './result/Result';
import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';
import { useEffect, useState } from 'react';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 2.5rem;
    border-radius: 25px 25px 0px 0px;
    padding:0 2rem;
    @media only screen and (min-width: 1440px) {
        flex-direction: row;
        width: 63.8%;
        margin-right: 3rem;
        border-radius: 25px;
        height: 480px;
    }
`;


export const TipCalculator = () => {
    const [amount, setAmount] = useState("");
    const [personCount, setPersonCount] = useState("");
    const [persentage, setPersentage] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [warning, setWarnng] = useState(false);

    useEffect(() => {
        if (amount && personCount && persentage) {
            const tip = amount * persentage / 100;
            const tipPerPerson = Number(tip) / Number(personCount);
            const total = Number(amount) + Number(tip);
            const totalPerPerson = (total + Number(tip)) / personCount;
            setTipAmount(tipPerPerson);
            setTotalAmount(totalPerPerson);
        }
    }, [amount, personCount, persentage])

    useEffect(() => {
        if (amount && persentage && !personCount) {
            setWarnng(true)
        } else {
            setWarnng(false)
        }
    }, [amount, personCount, persentage])

    const reset = () => {
        setAmount("")
        setPersonCount("")
        setPersentage(0)
        setTipAmount(0)
        setTotalAmount(0)
    }

    return (
        <Wrapper>
            <div>
                <SectionHeader value='Bill' />
                <UserInput icon={dollar} value={amount} setValue={setAmount} />
                <SectionHeader value='Select Tip %' />
                <PersentagesList setPersentage={setPersentage} />
                <SectionHeader value='Number of People' showWarning={warning} />
                <UserInput icon={person} value={personCount} setValue={setPersonCount} showWarning={warning} />
            </div>
            <Result
                tipAmount={tipAmount}
                totalAmount={totalAmount}
                reset={reset}
            />
        </Wrapper>
    );
};