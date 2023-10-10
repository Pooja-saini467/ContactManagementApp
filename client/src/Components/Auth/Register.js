import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register Submit");
  };

  return (
    <div className="flex flex-col justify-center m-2 xs:mx-5 sm:m-3 sm:mx-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-extrabold text-center text-black lg:text-3xl md:text-xl">
          Register User
        </h2>
      </div>
      <div className="container grid gap-8 pt-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center">
        <div className="lg:border-r xs:border-none border-gray-700  opacity-80">
          <img
            className="object-cover w-full h-full mx-auto bg-gray-300"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_l6ZusOl-7VQ_w4P1nCnau4YJD0AsS0X-gA&usqp=CAU"
            }
            alt="oops"
          />
        </div>
        <div className="mt-4 shadow-md sm:mx-auto sm:w-full hover:shadow-sm sm:max-w-md">
          <div className="px-4 py-8 transition duration-500 bg-gray-800 hover:opacity-95 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit} autoComplete="off">
              <div>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    onChange={onChange}
                    required
                    placeholder="Name"
                    className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={onChange}
                    required
                    className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    onChange={onChange}
                    placeholder="Password"
                    className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    value={password2}
                    required
                    onChange={onChange}
                    placeholder="Confirm Password"
                    className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-indigo-300 focus:outline-none "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
