import {Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<Typography variant="h5">About Me</Typography>
				<Typography>
					HELLO, My name is Pooja Narawad, I'm basically from Nanded,
					Maharashtra and living in Nanded. I have worked as a Front end
					developer.I'm into web development. My passion for web development
					started as a curiosity about how websites work. In 2020 I decided to
					switch my career from teaching to Programming. I joined IT for women
					as a student in January 2020. I'm passionate about learning new skills
					and I have completed a number of courses. I love being creative and I
					enjoy working as a team which gives me more opportunities to grow up.
					I Know HTML,CSS,SASS,JAVASCRIPT,REACTJS, NODEJS,EXPRESS AND MONGODB.
				</Typography>

				<Link to="/contact" className="footerContactBtn">
					<Typography>Contact Us</Typography>
				</Link>
			</div>
			<div>
				<Typography variant="h6">Social Media</Typography>
				<a href="https://github.com/PoojaNarawad" target="black">
					<BsGithub />
				</a>
				<a href="https://www.facebook.com/pooja.narawad" target="black">
					<BsFacebook />
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
