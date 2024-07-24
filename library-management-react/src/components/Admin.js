import '../cssfolder/Admin.css';

export default function Admin() {
    return (
        <div className="admin-body">
        <div className="admin-container">
            <h1>Admin Login</h1>
            <form className="admin-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
        </div>
    );
}