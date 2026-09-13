import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">

        {/* ===== NAVBAR ===== */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  RentWise <span className="gradient-text">AI</span>
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Home</a>
                <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Properties</a>
                <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Analytics</a>
                <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">About</a>
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
                <button className="hidden md:block px-5 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-primary-600 transition-colors">
                  Login
                </button>

                {/* Signup Button */}
                <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                  Sign Up
                </button>

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
          </div>
        </nav>

        {/* ===== HERO SECTION ===== */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left Side - Text */}
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    India's Smart Rental Platform
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                  Find Your Perfect<br />
                  <span className="gradient-text">Rental Home</span><br />
                  At Fair Price
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
                  RentWise AI uses Machine Learning to suggest fair rent, show area-wise trends, and help you find the perfect home without overpaying.
                </p>

                {/* Search Bar */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-2 flex flex-col sm:flex-row gap-2 max-w-xl">
                  <input
                    type="text"
                    placeholder="Search by city, area..."
                    className="flex-1 px-4 py-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                    🔍 Search
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8 mt-10">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">10K+</div>
                    <div className="text-sm text-slate-500">Properties</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">50+</div>
                    <div className="text-sm text-slate-500">Cities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">98%</div>
                    <div className="text-sm text-slate-500">Happy Users</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div className="relative animate-slide-up">
                <div className="relative z-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 space-y-4">

                    {/* Card 1 - Fair Rent */}
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl">
                        ✓
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500 dark:text-slate-400">Fair Rent Score</div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">92/100</div>
                      </div>
                    </div>

                    {/* Card 2 - Predicted Rent */}
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-xl">
                        ₹
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500 dark:text-slate-400">AI Predicted Rent</div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">₹18,500</div>
                      </div>
                    </div>

                    {/* Card 3 - Area Trend */}
                    <div className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                        📈
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500 dark:text-slate-400">Kothrud Area Trend</div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">+8.5%</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== FEATURED PROPERTIES SECTION ===== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
                  ⭐ Featured Properties
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Handpicked <span className="gradient-text">Properties</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Verified listings with AI-powered fair rent scores so you never overpay
              </p>
            </div>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Property Card 1 */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 bg-gradient-to-br from-primary-400 to-accent-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🏢
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                    <span>✓</span>
                    <span>Fair Rent</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold rounded-full">
                    ⭐ 4.8
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                    2 BHK Modern Apartment
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Kothrud, Pune
                  </p>

                  {/* Features */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>🛏️ 2 Bed</span>
                    <span>🚿 2 Bath</span>
                    <span>📐 950 sq.ft</span>
                  </div>

                  {/* Price + Score */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div>
                      <div className="text-2xl font-bold gradient-text">₹18,500</div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 mb-1">Fair Score</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">92</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 bg-gradient-to-br from-blue-400 to-indigo-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🏠
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                    <span>⚠️</span>
                    <span>Slightly High</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold rounded-full">
                    ⭐ 4.5
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                    3 BHK Luxury Flat
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Baner, Pune
                  </p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>🛏️ 3 Bed</span>
                    <span>🚿 3 Bath</span>
                    <span>📐 1450 sq.ft</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div>
                      <div className="text-2xl font-bold gradient-text">₹32,000</div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 mb-1">Fair Score</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">72</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 bg-gradient-to-br from-emerald-400 to-teal-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🏘️
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center space-x-1">
                    <span>✓</span>
                    <span>Great Deal</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold rounded-full">
                    ⭐ 4.9
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                    1 BHK Studio Apartment
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Hinjewadi, Pune
                  </p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>🛏️ 1 Bed</span>
                    <span>🚿 1 Bath</span>
                    <span>📐 550 sq.ft</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div>
                      <div className="text-2xl font-bold gradient-text">₹12,000</div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 mb-1">Fair Score</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">95</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                    View Details →
                  </button>
                </div>
              </div>

            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
                View All Properties →
              </button>
            </div>

          </div>
        </section>

        {/* ===== ANALYTICS SECTION ===== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-primary-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  📊 Market Analytics
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Rent <span className="gradient-text">Trends</span> & Insights
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Data-driven insights to help you make smarter rental decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Left - Top Cities */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    🏙️ Top Cities by Average Rent
                  </h3>
                  <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
                    Live Data
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { city: 'Mumbai', rent: '₹45,000', trend: '+12%', width: '95%', color: 'from-red-400 to-red-600' },
                    { city: 'Bangalore', rent: '₹32,000', trend: '+8%', width: '78%', color: 'from-orange-400 to-orange-600' },
                    { city: 'Pune', rent: '₹22,000', trend: '+5%', width: '60%', color: 'from-yellow-400 to-yellow-600' },
                    { city: 'Hyderabad', rent: '₹18,000', trend: '+3%', width: '48%', color: 'from-green-400 to-green-600' },
                    { city: 'Nashik', rent: '₹12,000', trend: '+2%', width: '32%', color: 'from-emerald-400 to-emerald-600' },
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-900 dark:text-white">{item.city}</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">{item.rent}</span>
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">{item.trend}</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Key Stats */}
              <div className="space-y-6">

                {/* Stat Card 1 */}
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm opacity-90">Average Fair Rent Score</span>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="text-5xl font-bold mb-2">87<span className="text-2xl opacity-75">/100</span></div>
                  <div className="text-sm opacity-90">↑ 4.2% from last month</div>
                </div>

                {/* Stat Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">10K+</div>
                    <div className="text-sm text-slate-500">Properties Analyzed</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                    <div className="text-3xl mb-2">🏘️</div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">50+</div>
                    <div className="text-sm text-slate-500">Cities Covered</div>
                  </div>
                </div>

                {/* AI Badge */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center">
                      🤖
                    </div>
                    <div>
                      <div className="font-bold">AI-Powered Predictions</div>
                      <div className="text-xs opacity-75">Random Forest Model • 88% Accuracy</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 rounded-3xl p-12 md:p-16 text-center overflow-hidden">

              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                  Ready to Find Your<br />
                  Fair-Priced Home?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of tenants who never overpay and landlords who always get fair rent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    🔍 Find Properties
                  </button>
                  <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    🏠 List Your Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">

              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  <span className="font-display font-bold text-xl text-white">
                    RentWise <span className="gradient-text">AI</span>
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Making rental pricing transparent across India with AI-powered insights.
                </p>
                <div className="flex space-x-3">
                  {['𝕏', 'in', 'f', 'ig'].map((social, idx) => (
                    <a key={idx} href="#" className="w-9 h-9 bg-slate-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 rounded-lg flex items-center justify-center text-sm font-bold transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-display font-bold text-white mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Find Properties</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">List Property</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Analytics</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Fair Rent Checker</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-display font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-display font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-slate-400">
                © 2025 RentWise AI. All rights reserved.
              </p>
              <p className="text-sm text-slate-400 flex items-center">
                Made with <span className="text-red-500 mx-1">❤️</span> in India
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App