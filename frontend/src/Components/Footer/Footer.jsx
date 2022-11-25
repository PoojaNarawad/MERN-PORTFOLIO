import {Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import {
	BsGithub,
	BsStackOverflow,
	BsInstagram,
	BsLinkedin,
} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<Typography variant="h5">About Me</Typography>
				<Typography>
					Hey, my name is POOJA NARAWAD.I am a MERN-Stack Developer and a
					tutorial on Youtube channel called <b> NEW Programming Tricks</b>
				</Typography>

				<Link to="/contact" className="footerContactBtn">
					<Typography>Contact Us</Typography>
				</Link>
			</div>
			<div>
				<Typography variant="h6">Social Media</Typography>
				<a href="https://https://github.com/PoojaNarawad/" target="black">
					<BsGithub />
				</a>
				<a href="https://instagram.com/pooja/" target="black">
					<BsInstagram />
				</a>
				<a
					href="https://stackoverflow.com/users/20283458/pooja?tab=profile"
					target="black"
				>
					<BsStackOverflow />
				</a>
				<a
					href="https://www.linkedin.com/in/pooja-narawad-240a7a234/"
					target="black"
				>
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default Footer;
