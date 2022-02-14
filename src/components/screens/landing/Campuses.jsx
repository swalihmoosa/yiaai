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
				<More>
					And <Bold>300</Bold> More Campus All Over Kerala
				</More>
			</Wrapper>
		</CampusSection>
	)
}
const CampusSection = styled.section`
    background-color: #f3f9eb;
	padding: 5% 0;
`
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
const Ul = styled.ul`
	display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
	width: 90%;
    margin: 0 auto;
	margin-bottom: 4%;
`
const Li = styled.li`
	width: 15%;
    margin-bottom: 3%;
	&:nth-last-child(-n+6){
		margin-bottom: 0%;
	}
`
const College = styled.div`
	width: 50%;
    margin: 0 auto 3%;
`
const Name = styled.h4`
	width: 100%;
    text-align: center;
    font-size: 18px;
    margin-bottom: 3%;
`
const Place = styled.h5`
	color: #59a670;
    text-align: center;
    font-size: 17px;
    font-weight: 700;

`
const More = styled.p`
	text-align: center;
    font-size: 23px;
    font-weight: 700;
`
const Bold = styled.b`
	color: #59a670;
	font-weight: 700;
`