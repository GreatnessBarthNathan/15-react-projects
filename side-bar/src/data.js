import React from 'react'
import { FaHome, FaUserFriends, FaFolderOpen, FaRegCalendarAlt, FaNewspaper} from "react-icons/fa";
import {FaBehance, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

export const links = [
    {
        id: 1,
        url: '/',
        icon: <FaHome/>,
        text: 'home'
    },
    {
        id: 2,
        url: '/team',
        icon: <FaUserFriends/>,
        text: 'team'
    },
    {
        id: 3,
        url: '/projects',
        icon: <FaFolderOpen/>,
        text: 'projects'
    },
    {
        id: 4,
        url: '/calendar',
        icon: <FaRegCalendarAlt/>,
        text: 'calendar'
    },
    {
        id: 5,
        url: '/documents',
        icon: <FaNewspaper/>,
        text: 'documents'
    },
   
]

export const social = [
    {
        id: 1,
        url: 'www.facebook.com',
        icon: <FaFacebook/>
    },
    {
        id: 2,
        url: 'www.twitter.com',
        icon: <FaTwitter/>
    },
    {
        id: 3,
        url: 'www.linkedin.com',
        icon: <FaLinkedin/>
    },
    {
        id: 4,
        url: 'www.behance.com',
        icon: <FaBehance/>
    },
]