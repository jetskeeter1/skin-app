import './style/Login.scss';

function Login() {
  return (
    <div className="Login">
      <header className="App-header">
      <h1>Login</h1>
      <div className='user'>
        <input type='text' className='username' placeholder='Username...'/>
      </div>
      <div className='pass'>
        <input type='password' className='password' placeholder='Password...'/>
      </div>

      <button type='button' id='btn-login'>Login</button>
      <a href='./pages/admin.js'>admin pages</a>
      </header>
    </div>
  );
}

export default Login;
