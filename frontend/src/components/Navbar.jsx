import { useState } from 'react'

function Navbar({ darkMode, setDarkMode }) {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">R</span>
                        </div>
                        <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                            RentWise <span className="gradient-text">AI</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Home</a>
                        <a href="/properties" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Properties</a>
                        <a href="/analytics" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Analytics</a>
                        <a href="/about" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">About</a>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-3">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        {/* Login Button */}
                        <a href="/login" className="hidden md:block px-5 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-primary-600 transition-colors">
                            Login
                        </a>

                        {/* Signup Button */}
                        <a href="/register" className="hidden md:block px-5 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                            Sign Up
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenu && (
                    <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col space-y-3">
                            <a href="/" className="text-slate-700 dark:text-slate-300 font-medium py-2">Home</a>
                            <a href="/properties" className="text-slate-700 dark:text-slate-300 font-medium py-2">Properties</a>
                            <a href="/analytics" className="text-slate-700 dark:text-slate-300 font-medium py-2">Analytics</a>
                            <a href="/about" className="text-slate-700 dark:text-slate-300 font-medium py-2">About</a>
                            <a href="/login" className="text-slate-700 dark:text-slate-300 font-medium py-2">Login</a>
                            <a href="/register" className="px-5 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-lg text-center">Sign Up</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar