import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import '../css/Header.css'

const Header = () => {
    return <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
        <IconButton>
            <img src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png" alt="tinder logo" className="header_logo" />
        </IconButton>
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
    </div>;
};

export default Header;
