import React from 'react'
import styled from 'styled-components'
import jamia from '../../assets/images/landing/download.png'


export default function Campuses() {
	return (
		<CampusSection>
			<Wrapper>
				<H3>
					<B>Associated</B> Campuses
				</H3>
				<P>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eum aspernatur voluptate eius ullam sed porro veniam nemo incidunt culpa! Nulla perspiciatis 
					dolores ullam ipsum laudantium quos maxime aliquam magni nisi.
				</P>
				<Ul>
					<Li>
						<College>
							<img src={jamia} alt="Jamia" />
						</College>
						<Name>
							Jamia Nadwiyya arts & sports college
						</Name>
						<Place>
							Malappuram
						</Place>
					</Li>
				</Ul>
			</Wrapper>
		</CampusSection>
	)
}
const CampusSection = styled.section``
const Wrapper = styled.section`
	width:90%;
	margin: 0 auto;
`
const H3 = styled.h3`
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 1%;
`
const B = styled.b`
	color:#59a670;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 1%;
`
const P = styled.p`
	color: #6e6e6e;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    font-size: 18px;
    margin-bottom: 3%;
`
const Ul = styled.ul``
const Li = styled.li``
const College = styled.div``
const Name = styled.h4``
const Place = styled.h5``