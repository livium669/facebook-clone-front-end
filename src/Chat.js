import React from 'react';
import './Chat.scss';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__sponsored">
                <h3>Sponsored</h3>
            </div>

            <div className="chat__contacts">
                <div className="chat__contactsTitle">
                    <h3>Contacts</h3>
                </div>
                <div className="chat__contactsIcon">
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__contactsChat">
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
                <SidebarChat Icon={Avatar} title="Username" />
            </div>
        </div>
    )
}

export default Chat;
