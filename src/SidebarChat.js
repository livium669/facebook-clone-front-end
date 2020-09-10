import React from 'react';
import './SidebarChat.scss';
import { Avatar } from '@material-ui/core';

function SidebarChat({ src, Icon, title }) {
    return (
        <div className="sidebarChat">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarChat;
