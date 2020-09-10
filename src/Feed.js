import React from 'react';
import './Feed.scss';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Rooms from './Rooms';
import Post from './Post';
import db from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Rooms />
            {posts.map((post) => (
            <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                image={post.data.image}
                username={post.data.username}
                timestamp={post.data.timestamp}
                message={post.data.message}
            />
            ))}
        </div>
    )
}

export default Feed;
