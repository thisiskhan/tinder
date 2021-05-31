import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import TelegramIcon from '@material-ui/icons/Telegram';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://i.pcmag.com/imagery/reviews/02ibIXDUJNJ3V7KL8jhUNFf-7..1569480464.png"

                alt="" Tinder logo />
            <IconButton>
                <TelegramIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
}

export default Header;
