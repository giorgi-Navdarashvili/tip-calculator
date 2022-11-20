import styled from 'styled-components'

const Btn = styled.button`
    font-family: inherit;
    background-color:${({values}) => values.clicked ? '#26C2AE' : '#00474B'};
    border: none;
    color: white;
    height: 3rem;
    width: 9.125rem;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 5px;
    :hover {
        background-color: #9FE8DF;
        color: #00474B;
        cursor: pointer;
    }
`

export const BasicButton = ({ values, buttonValues, setButtonValues, setPersentage }) => {
    const text = values.persent;
    var updatedButtons;
    return (
        <Btn values={values} onClick={(e) => {
            updatedButtons = buttonValues.map((el) => {
                if(el.id === values.id){
                    return {...el, clicked: true}
                }else {
                    return {...el, clicked: false}
                }
            });
            setButtonValues(updatedButtons)
            setPersentage(text.substr(0, text.length - 1))
        }}>{text}</Btn>
    )
}