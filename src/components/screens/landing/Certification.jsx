import React from 'react'
import styled from 'styled-components'

import medalImage from '../../assets/images/landing/medal+.svg'
import certificateImage from '../../assets/images/landing/certificate.png'
import arrowImage from '../../assets/images/landing/arrow.svg'


export default function Certification() {
    return (
        <CerticationSection>
            <Wrapper>
                <Program>
                    <Medal>
                        <img src={medalImage} alt='Medal' />
                    </Medal>
                    <H4>
                        Certification
                    </H4>
                    <P>
                        പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും 24 ന്യൂസും <br />Talrop - ഉം  ചേർന്ന് ഒരുക്കിയിരിക്കുന്ന കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.
                    </P>
                    <Certificate>
                        <img src={certificateImage} alt='Certificate' />
                    </Certificate>
                    <Arrow>
                        <img src={arrowImage} alt='Arrow' />
                    </Arrow>
                </Program>
            </Wrapper>
        </CerticationSection>
    )
}
const CerticationSection = styled.section``
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const Program = styled.div`
    background-image: linear-gradient(to right,#66b859,#4599af);
    width: 90%;
    margin: 0 auto;
    border-radius: 25px;
    position: relative;
    padding: 8% 5% 5%;
`
const Medal = styled.div`
    position: absolute;
    top: 0;
    left: 5%;
    width: 5%;
`
const H4 = styled.h4`
    font-size: 35px;
    color: #fff;
    font-weight: 900;
    margin-bottom: 1%;
`
const P = styled.p`
    font-size: 20px;
    color: #ededed;
`
const Certificate = styled.div`
    position: absolute;
    top: -27%;
    width: 45%;
    right: 3%;
    z-index: 1;
`
const Arrow = styled.div`
    position: absolute;
    width: 15%;
    right: 39%;
    bottom: -38%;
    z-index: 2;
`