import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        localStorage.removeItem("token");
        setRedirect(true);
    }, []);

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return null;  // Render nothing while waiting for the redirect
};

export default Logout;
