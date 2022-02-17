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
                                10
                            </Div>
                            <Div>
                                9
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
    padding: 12%;
    border-radius: 50px;
`
const Details = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 1px dotted #bfbfbf;
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
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Class = styled.option``
const Divisions = styled.select``
const Div = styled.option``
const Buttons = styled.div``
const Back = styled.button``
const Submit = styled.button``