import { useState, type ChangeEvent } from "react"
import useStore from "../../store/ecom-store"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"



const Login = () => {

  const actionlogin = useStore((state) => state.actionlogin)
  const user = useStore((state) => state.user)
  console.log('User is Zustand', user)
  const navigate = useNavigate()


  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const handleOnchang = (e: ChangeEvent<HTMLInputElement>) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOnsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
    try {
      const res = await actionlogin(form)
      console.log(res)
      const role = res.data.payload.role
      toast.success('Welcome to back')
      navigatelogin(role)
      console.log(role)
    } catch (err: any) {
      const errmsg = err.response?.data?.message
      toast.error(errmsg)
      console.log(err)
    }


  }

  const navigatelogin = (role: string) => {
    if (role === 'admin') {
      navigate('/admin')
    } else {
      navigate(-1)
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
                Sign in to your account
              </h1>
              <form action="#" className="space-y-4 md:space-y-6" onSubmit={handleOnsubmit}>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="email">
                    Your email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleOnchang}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        aria-describedby="remember"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        id="remember"
                        required
                        type="checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        className="text-gray-500 dark:text-gray-300"
                        htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#">
                    Forgot password?
                  </a>
                </div>
                <button
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit">
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Login