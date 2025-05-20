import "./navigation.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Activity from "../Activity";
import axios from "axios";


function SideBar(pageName) {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();

    function setPage(pageName) {
        setSelected(pageName);
    };

    if (pageName === "Home") {
        navigate("/home");
    } else if (pageName === "Favorites") {
        navigate("/favorites");
    } else if (pageName === "Watch Later") {
        navigate("/watchlater");
    }

    useEffect(() => {
        axios.get("/api/activity")
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <nav className="sidebar">
            <ul className="navigation">
                <li onClick={() => setPage("Home")}>🏠 Home</li>
                <li onClick={() => setPage("Favorites")}>⭐ Favorites</li>
                <li onClick={() => setPage("Watch Later")}>⏰ Watch Later</li>
            </ul>

            <ul className="activity">
                {activities.slice(0, 10).map((activity, index) => (
                    <Activity key={index} {...activity} />
                ))}
            </ul>
        </nav>
    );
};

export default SideBar;
