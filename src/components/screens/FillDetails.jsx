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
const FillDetailsSection = styled.section``
const Wrapper = styled.section``
const Details = styled.section``
const H3 = styled.section``
const Form = styled.section``
const Label = styled.section``
const Campus = styled.section``
const Classes = styled.section``
const Class = styled.section``
const Divisions = styled.section``
const Div = styled.section``
const Buttons = styled.section``
const Back = styled.section``
const Submit = styled.section``