import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="my-6 flex justify-between">
      <img
        src="https://images.placeholders.dev/?width=100&height=50&text=logo"
        alt=""
      />
      <nav className="flex items-center gap-x-5">
        <Image
          className="w-6"
          src="/icons/search.svg"
          alt=""
          width={'24'}
          height={'24'}
        />
        <Link href={'/login'}>
          <Image
            className="w-6"
            src="/icons/sign-in.svg"
            alt=""
            width={'24'}
            height={'24'}
          />
        </Link>
        <Image
          className="w-6"
          src="/icons/cart.svg"
          alt=""
          width={'24'}
          height={'24'}
        />
        <Image
          className="w-6"
          src="/icons/menu.svg"
          alt=""
          width={'24'}
          height={'24'}
        />
      </nav>
    </header>
  )
}

export default Header
