const Login = () =>
<>
    <div className="flex justify-center w-full mt-32">
        <div>
            <div className="text-center text-2xl font-bold">Login Admin</div>
            <input className="border py-1 px-3 mt-2" placeholder="Username"/>
            <br/>
            <input className="border py-1 px-3 mt-2" placeholder="Password"/>
            <br/>
            <div className="flex items-center mt-2">
                <button className="mx-auto bg-blue-500 rounded text-white px-3 py-1 border-white focus:bg-blue-600">Login</button>
            </div>
        </div>
    </div> 
</>;

export default Login;