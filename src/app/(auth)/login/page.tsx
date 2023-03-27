import Link from 'next/link'

const Login = () => {
  return (
    <>
      <form className="mx-auto w-full border p-2 sm:w-[300px]">
        <fieldset className="flex flex-col">
          <h1 className="text-xl font-semibold text-black">Sign in</h1>
          <label className="mt-3" htmlFor="email">
            E-mail
          </label>
          <input className="mb-3 border" id="email" type="text" />
        </fieldset>
        <button className="my-3 w-full rounded-sm border bg-blue-700 p-2 text-white	">
          Continue
        </button>
      </form>
      <section className="my-5 mx-auto w-[300px] p-2">
        <p className="text-center text-black">
          New to Fake Store?{' '}
          <Link href="/register" className="underline hover:no-underline">
            Register
          </Link>
        </p>
      </section>
    </>
  )
}

export default Login
