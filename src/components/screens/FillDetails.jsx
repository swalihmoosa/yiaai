import React from 'react'

export default function FillDetails() {
    return (
        <FillDetailsSection>
            <Wrapper>
                <Deails>
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
                    </Form>
                </Deails>
            </Wrapper>
        </FillDetailsSection>
    )
}
