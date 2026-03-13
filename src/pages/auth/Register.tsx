import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"


const Register = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })

  const handleOnchang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOnsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
    if (form.password !== form.confirmpassword) {
      return toast.warning('Password Do Not Match!')
    }
    try {
      const res = await axios.post('http://localhost:5005/api/register', form)
      console.log(res)
      toast.success(res.data)
    } catch (err: any) {
      const errmg = err.response?.data?.message
      toast.error(errmg)
      console.log(err.response)

    }

  }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            href="#">
            <img
              alt="logo"
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form action="#" className="space-y-4 md:space-y-6" onSubmit={handleOnsubmit}>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="email">
                    Your email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleOnchang}
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="password">
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleOnchang}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="confirm-password">
                    Confirm password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleOnchang}
                    id="confirm-password"
                    name="confirmpassword"
                    placeholder="••••••••"
                    required
                    type="confirm-password"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="terms"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      id="terms"
                      required
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      className="font-light text-gray-500 dark:text-gray-300"
                      htmlFor="terms">
                      I accept the{" "}
                      <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="#">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit">
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#">
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      Register
      <form onSubmit={handleOnsubmit}>
        email
        <input className="border"
          onChange={handleOnchang}
          name="email"
          type="email"
        />
        password
        <input className="border"
          onChange={handleOnchang}
          name="password"
          type="password"
        />
        confirmpassword
        <input className="border"
          onChange={handleOnchang}
          name="confirmpassword"
          type="password"
        />
        <button className="bg-green-700 text-white rounded-md mx-3">Register</button>
      </form>
    </div>
  )
}

export default Register