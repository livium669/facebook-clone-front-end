import React from 'react';
import './Rooms.scss';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Link, Avatar } from '@material-ui/core';

function Rooms() {
    return (
        <div className="rooms">
            <div className="rooms__top">
                <VideoCallIcon fontSize="medium" style={{ color: "purple"}} />
                <h3>Rooms</h3>
                <p className="rooms__p">Video chat with friends</p>
                <Link style={{ textDecoration: "none" , cursor: "pointer" }}>
                    Create Room
                </Link>
            </div>

            <div className="rooms__bottom">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </div>
    )
}

export default Rooms;
