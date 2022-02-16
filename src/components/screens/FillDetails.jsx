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
`
const Details = styled.div``
const H3 = styled.h3``
const Form = styled.form``
const Label = styled.label``
const Campus = styled.input``
const Classes = styled.select``
const Class = styled.option``
const Divisions = styled.select``
const Div = styled.option``
const Buttons = styled.div``
const Back = styled.button``
const Submit = styled.button``