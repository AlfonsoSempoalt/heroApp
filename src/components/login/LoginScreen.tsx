import React, { useContext } from 'react';
import { History } from 'history';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

interface ChildComponentProps {
    history: History;
}

const LoginScreen: React.FC<ChildComponentProps> = ({ history }) => {
    const { dispatch } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';
    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Alfonso',
            },
        });
        history.replace(lastPath);
    };

    return (
        <>
            <section className='container mt-5'>
                <h1>Log In</h1>
                <hr />
                <button className='btn btn-primary' onClick={handleLogin}>
                    Log In
                </button>
            </section>
        </>
    );
};

export default LoginScreen;
