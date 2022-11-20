import styled from 'styled-components'
import { preventIllegalCharacters } from '../utils';

const Wrapper = styled.div`
    background-color: #F3F9FA;
    height: 3rem;
    width: 9.125rem;
    border-radius: 5px;
    color: #547878;
    padding-right: 13px;

`

const CustomInput = styled.input`
    font-family: inherit;
    border: none;
    color: #00474B;
    width: 100%;
    font-size: 2rem;
    text-align: right;
    font-weight: 700;
`


export const CustomPersentageInput = ({ setPersentage, buttonValues, setButtonValues }) => {
    var updatedButtons;

    return (
        <Wrapper>
            <CustomInput
                type="number"
                placeholder='Custom'
                onPaste={e => e.preventDefault()}
                onKeyPress={preventIllegalCharacters} min="0"
                onWheel={(e) => e.target.blur()}
                onChange={(e) => {
                    updatedButtons = buttonValues.map((el) => ({ ...el, clicked: false }));
                    setButtonValues(updatedButtons)
                    return setPersentage(e.target.value);
                }} />
        </Wrapper>
    );
}