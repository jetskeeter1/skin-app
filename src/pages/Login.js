function Login(){
    return(
     <header className="App-header">
        <h1>This is the Login</h1>
        <div className='user'>
            <input type='text' className='username' placeholder='Username...'/>
        </div>
        <div className='pass'>
            <input type='password' className='password' placeholder='Password...'/>
        </div>
        <button type='button' id='btn-login'>Login</button>
      </header>
    )
}

export default Login;