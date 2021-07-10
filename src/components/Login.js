import React from 'react';

const Login = () => {
    return (
        <div>
            <p>Login Component has loaded....</p>
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" className="form-control" required />
                </div>
                <button type ="submit" className="buttonplaceholder">submit</button>
            </form>
        </div>
    );
}

export default Login;
