import React from 'react'
import styled from 'styled-components'

export default function FillDetails() {
    return (
        <FillDetailsSection>
            <Wrapper>
                <Details>
                    <H3>
                        Fill Your Details
                    </H3>
                    <Hr />
                    <Form>
                        <Label>
                            Campus Name / Code *
                        </Label>
                        <Campus type="text" placeholder="JNE002" />
                        <Label>
                            Select Class *
                        </Label>
                        <Classes>
                            <Class>
                                10
                            </Class>
                            <Class>
                                9
                            </Class>
                            <Class>
                                8
                            </Class>
                        </Classes>
                        <Label>
                            Select Division *
                        </Label>
                        <Divisions>
                            <Div>
                                A
                            </Div>
                            <Div>
                                B
                            </Div>
                        </Divisions>
                        <Buttons>
                            <Back>Back</Back>
                            <Submit>Submit</Submit>
                        </Buttons>
                    </Form>
                </Details>
            </Wrapper>
        </FillDetailsSection>
    )
}
const FillDetailsSection = styled.section`
    padding: 10% 0 0;
`
const Wrapper = styled.section`
    margin: 0 auto;
    width: 90%;
    background-color: #e4fdf7;
    padding: 4%;
    border-radius: 50px;
`
const Details = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 1px dotted #bfbfbf;
    border-radius: 25px;
`
const H3 = styled.h3`
    padding: 5%;
    font-size: 20px;
    font-weight: 700;
`
const Hr = styled.hr`
    border-top: 1px dotted #bfbfbf;
    margin-bottom: 30px;
    width: 100%;
`
const Form = styled.form`
    padding: 5%;
`
const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
    color: #bfbfbf;
`
const Campus = styled.input`
    width: 100%;
    border: 2px solid #e3e3e3;
    padding: 4%;
    margin: 3% 0;
    border-radius: 15px;
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Classes = styled.select`
    width: 100%;
    border: 2px solid #e3e3e3;
    padding: 4%;
    margin: 3% 0;
    border-radius: 15px;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right transparent;
    -webkit-appearance: none;
    background-position-x: 95%;
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Class = styled.option`
    font-size: 15px;
    font-weight: 700;
`
const Divisions = styled.select`
    width: 100%;
    border: 2px solid #e3e3e3;
    padding: 4%;
    margin: 3% 0;
    border-radius: 15px;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right transparent;
    -webkit-appearance: none;
    background-position-x: 95%;
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Div = styled.option`
    font-size: 15px;
    font-weight: 700;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7%;
`
const Back = styled.button`
    width: 25%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #4f585e;
    border: 2px solid #dfdfdf;
    padding: 20px 30px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: 4%;
    &:hover{
        border: 2px solid #22c1c3;
        cursor: pointer;
    }
`
const Submit = styled.button`
    width: 25%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
        cursor: pointer;
    }
`