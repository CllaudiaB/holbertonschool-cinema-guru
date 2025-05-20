import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
    return (
        <li className="Activity">
            <p>{activity.description} - {activity.date}</p>
        </li>
    );
};

export default Activity;