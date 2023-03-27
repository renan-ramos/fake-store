import Link from 'next/link'

const Register = () => {
  return (
    <>
      <form className="mx-auto w-full border p-2 sm:w-[300px]">
        <fieldset className="flex flex-col">
          <h1 className="text-xl font-semibold text-black">Create Account</h1>
          <label className="mt-3" htmlFor="name">
            Name
          </label>
          <input
            className="mb-3 border"
            id="name"
            type="text"
            autoComplete="given-name"
          />
          <label className="mt-3" htmlFor="email">
            E-mail
          </label>
          <input
            className="mb-3 border"
            id="email"
            type="text"
            autoComplete="username"
          />
          <label className="mt-3" htmlFor="password">
            Password
          </label>
          <input
            className="mb-3 border"
            id="password"
            type="text"
            autoComplete="new-password"
          />
          <label className="mt-3" htmlFor="password">
            Re-enter Password
          </label>
          <input
            className="mb-3 border"
            id="password"
            type="text"
            autoComplete="new-password"
          />
        </fieldset>
        <button className="my-3 w-full rounded-sm border bg-blue-700 p-2 text-white	">
          Continue
        </button>
      </form>
      <section className="my-5 mx-auto w-[300px] p-2">
        <p className="text-center text-black">
          Already have an account?{' '}
          <Link href="/login" className="underline hover:no-underline">
            Sign in
          </Link>
        </p>
      </section>
    </>
  )
}

export default Register
