import { BasicButton } from "./BasicButton"
import { CustomPersentageInput } from "./CustomPersentageInput"
import styled from 'styled-components'
import { useState } from "react"

const Buttons = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    @media only screen and (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 14px;
    }
`



export const PersentagesList = ({ setPersentage }) => {

    const [buttonValues, setButtonValues] = useState([
        {
            id: 0,
            persent: "5%",
            clicked: false
        },
        {
            id: 1,
            persent: "10%",
            clicked: false
        },
        {
            id: 2,
            persent: "15%",
            clicked: false
        },
        {
            id: 3,
            persent: "25%",
            clicked: false
        },
        {
            id: 4,
            persent: "50%",
            clicked: false
        },
    ])

    return (
        <Buttons>
            {buttonValues.map(e => (
                <BasicButton key={e.id} values={e} buttonValues={buttonValues} setButtonValues={setButtonValues} setPersentage={setPersentage} />
            ))}
            <CustomPersentageInput setPersentage={setPersentage} buttonValues={buttonValues} setButtonValues={setButtonValues} />
        </Buttons>
    )
}