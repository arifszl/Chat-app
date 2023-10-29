const Login = () => {
  let isLogin = true;
  return (
    <div className="bg-gradient-to-br from-[#547785] to-[#b3acf3] w-[450px] h-[500px] rounded-md shadow-2xl flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-[#070735] mb-3 w-full text-center">
        Welcome Back!
      </h1>
      <p className=" font-bold text-[#070735] mb-4 w-full text-center">
        Sign-in to explore
      </p>
      <form className="flex flex-col gap-4 p-8 bg-[#0000f] rounded-md shadow-2xl ">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-gray-800 font-medium"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="border border-gray-400 rounded-md py-2 px-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-gray-800 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-400 rounded-md py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-[#070735] text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
        >
          Login
        </button>
        <p className="text-gray-800 text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
