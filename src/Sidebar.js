import React from 'react';
import './Sidebar.scss';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ user }] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow 
            Icon={LocalHospitalIcon} 
            title="Covid-19 Information Center"
            />
            
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={FavoriteOutlinedIcon} title="Fundraisers" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See more" />
        </div>
    )
}

export default Sidebar;
