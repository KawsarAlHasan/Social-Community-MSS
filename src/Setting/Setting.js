import React, { useState } from 'react';
import LogoSearch from '../components/LogoSearch/LogoSearch';
import "../components/RightSide/RightSide.css";
import './Setting.css';
import Users from './Users';
import UserSetting from './UserSetting';


const Setting = () => {
    const [element, setElement] = useState(<UserSetting/>)
    return (
        <div className='setting-container'>
            <div className="setting-nav">
                <LogoSearch></LogoSearch>
            </div>
            <div className="dashboard">
                <div className="sidebar">
                    <ul>
                        <li>
                            <button onClick={()=>setElement(<UserSetting/>)}>User</button>
                        </li>
                        <li>
                            <button onClick={()=>setElement(<Users/>)}>Users</button>
                        </li>
                        <li>
                            <button onClick={()=>setElement(<Users/>)}>Admin</button>
                        </li>
                        
                    </ul>
                </div>
                <div className="dashboard-content">
                    <div className="main-contents">
                        {element}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;