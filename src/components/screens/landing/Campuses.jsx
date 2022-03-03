import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";

import jamia from '../../assets/images/landing/download.png'


export default function Campuses() {
	const[colleges]= useState([
		{
			id : 1,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 2,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 3,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 4,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 5,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 6,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 7,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 8,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 9,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 10,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 11,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 12,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 13,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 14,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 15,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
		{
			id : 16,
			logo : jamia,
			name : "Jamia Nadwiyya arts & sports college",
			place : "Malappuram",
		},
	])

    const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		rows: 2,
		slidesPerRow: 2
	  };

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
				<Slider {...settings}>
					{
						colleges.map(college=>(
							<Li key={college.id} >
								<College>
									<img src={college.logo} alt={college.name} />
								</College>
								<Name>
									{college.name}
								</Name>
								<Place>
									{college.place}
								</Place>
							</Li>
						))
					}
				</Slider>
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
const Li = styled.div`
	width: 45% !important ;
    margin-bottom: 15% !important;
    margin-right: 3% !important;
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
	margin-top: 6%;
`
const Bold = styled.b`
	color: #59a670;
	font-weight: 700;
`