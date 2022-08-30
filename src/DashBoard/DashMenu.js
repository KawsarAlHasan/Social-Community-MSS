import React from 'react';
import { Link } from 'react-router-dom';

const DashMenu = ({children}) => {
    return (
        <div>
            <div className="nav">
                <Link to={"link1"}>Link 1</Link>
                <Link to={"link2"}>Link 2</Link>
            </div>
            <div className="children">
                {children}
            </div>
        </div>
    );
};

export default DashMenu;