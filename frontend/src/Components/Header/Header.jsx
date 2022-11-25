import React from 'react';
import {ReactNavbar} from 'overlay-navbar';
import logo from '../../Images/logo.png';
import {FaUserAlt} from 'react-icons/fa';

const Header = () => {
	return (
		<ReactNavbar
			navColor1="white"
			navColor2="hsl(241, 65%, 10%)"
			burgerColor="hsl(230, 35%, 35%)"
			burgerColorHover="HSL(250,100%,75%)"
			logo={logo}
			logoWidth="250px"
			nav2JustifyContent="space-around"
			nav3JustifyContent="space-around"
			link1Text="Home"
			link2Text="About"
			link3Text="Projects"
			link4Text="Contact"
			link1Url="/"
			link2Url="/about"
			link3Url="/projects"
			link4Url="/contact"
			link1ColorHover="white"
			link1Color="HSL(250,100%,75%)"
			link1Size="1.5rem"
			link1Padding="3vmax"
			profileIcon={true}
			ProfileIconElement={FaUserAlt}
			profileIconColor="hsl(250,100%,75%)"
			profileIconColorHover="white"
		/>
	);
};

export default Header;
