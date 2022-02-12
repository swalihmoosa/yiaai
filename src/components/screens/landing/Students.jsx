import React from 'react'
import styled from 'styled-components'

import rightImage from '../../assets/images/landing/join-img.png'


export default function Students() {
    return (
        <StudentsSection>
            <Wrapper>
                <H4>
                    <B>

                    </B>
                </H4>
                <Join>
                    <Left>
                        <Li>
                            <P>

                            </P>
                            <Round>

                            </Round>
                        </Li>
                    </Left>
                    <Right>
                        <img src={rightImage} alt='Student' />
                    </Right>
                </Join>
            </Wrapper>
        </StudentsSection>
    )
}
const StudentsSection = styled.section``
const Wrapper = styled.section``
const H4 = styled.section``
const B = styled.section``
const Join = styled.section``
const Left = styled.section``
const Li = styled.section``
const P = styled.section``
const Round = styled.section``
const Right = styled.section``