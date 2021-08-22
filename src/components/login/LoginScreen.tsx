import React from 'react';
import { History } from 'history';

interface ChildComponentProps {
    history: History;
}

const LoginScreen: React.FC<ChildComponentProps> = ({ history }) => {
    const handleLogin = () => {
        history.replace('/');
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
