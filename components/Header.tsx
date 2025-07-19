import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = `sticky top-0 z-50 w-full border-b transition-all duration-300 ${
    isScrolled
      ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm py-3'
      : 'bg-white dark:bg-gray-950 py-6'
  }`

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8">
        {/* Logo + Title */}
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center space-x-3">
            <Logo
              className={`transition-all duration-300 ease-in-out ${
                isScrolled ? 'h-6 w-6' : 'h-8 w-8'
              }`}
            />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <span
                className={`hidden font-semibold transition-all duration-300 ease-in-out sm:block ${
                  isScrolled ? 'text-lg' : 'text-2xl'
                }`}
              >
                {siteMetadata.headerTitle}
              </span>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        {/* Nav + Tools */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Navigation Links */}
          <nav className="hidden items-center gap-x-6 sm:flex md:gap-x-8 lg:gap-x-10">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="relative font-medium text-gray-900 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full dark:text-gray-100 dark:after:bg-white"
                >
                  {link.title}
                </Link>
              ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
