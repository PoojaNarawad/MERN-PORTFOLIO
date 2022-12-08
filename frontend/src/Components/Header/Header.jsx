import React from 'react';
import {ReactNavbar} from 'overlay-navbar';
import logo from '../../Images/logo.png';
import {FaUserAlt} from 'react-icons/fa';

const Header = () => {
	return (
		<ReactNavbar
			navColor1="white"
			navColor2="hsla(49, 64%, 47%, 1)"
			burgerColor="hsla(38, 61%, 44%, 1)"
			burgerColorHover="hsla(67, 100%, 50%, 1)"
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
			link1Color="hsla(292, 21%, 39%, 1)"
			link1Size="1.5rem"
			link1Padding="3vmax"
			profileIcon={true}
			ProfileIconElement={FaUserAlt}
			profileIconColor="hsla(331, 38%, 39%, 1)"
			profileIconColorHover="white"
		/>
	);
};

export default Header;
