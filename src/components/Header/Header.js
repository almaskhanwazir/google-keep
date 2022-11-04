import React from "react";
import keepLogo from '../../Assests/Images/keep-logo.png'
import "./header.scss";

const Header = () => {
	return (
		<div className="nav">
			<p>Keep clone</p>
			<div className="ImgWrap">
			<img src={keepLogo} alt="Google keep logo" />
			</div>
		</div>
		
	);
};

export default Header;
