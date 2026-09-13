import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [role, setRole] = useState('tenant')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        terms: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        console.log('Register:', { ...formData, role })
        alert(`Register as ${role}! Backend connect karenge baad me.`)
    }

    return (
        <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">

                {/* Left Side - Info */}
                <div className="hidden md:block">
                    <div className="inline-flex items-center px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6">
                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
                            Join RentWise AI
                        </span>
                    </div>

                    <h1 className="font-display text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        Create Your<br />
                        <span className="gradient-text">Free Account</span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                        Join thousands of tenants and landlords who trust RentWise AI for fair rental pricing.
                    </p>

                    <div className="space-y-4">
                        {[
                            { icon: '🏠', title: 'For Tenants', desc: 'Find fair-priced homes easily' },
                            { icon: '💰', title: 'For Landlords', desc: 'Set optimal rent with AI insights' },
                            { icon: '🎯', title: 'Fair Rent Score', desc: 'Never overpay or undercharge' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                <div className="text-2xl">{item.icon}</div>
                                <div>
                                    <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Register Form */}
                <div className="w-full">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100 dark:border-slate-700">

                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                Create Account
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                Fill in your details to get started
                            </p>
                        </div>

                        {/* Role Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                                I want to register as
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {/* Tenant */}
                                <button
                                    type="button"
                                    onClick={() => setRole('tenant')}
                                    className={`relative p-4 rounded-xl border-2 transition-all text-left ${role === 'tenant'
                                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-md'
                                        : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                                        }`}
                                >
                                    <div className="text-3xl mb-2">🔍</div>
                                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Tenant</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">I'm searching for a home</div>
                                    {role === 'tenant' && (
                                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                                            ✓
                                        </div>
                                    )}
                                </button>

                                {/* Landlord */}
                                <button
                                    type="button"
                                    onClick={() => setRole('landlord')}
                                    className={`relative p-4 rounded-xl border-2 transition-all text-left ${role === 'landlord'
                                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-md'
                                        : 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
                                        }`}
                                >
                                    <div className="text-3xl mb-2">🏠</div>
                                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Landlord</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">I want to list my property</div>
                                    {role === 'landlord' && (
                                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                                            ✓
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Suraj Kumar Mishra"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                                        >
                                            {showPassword ? '👁️' : '👁️‍🗨️'}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Confirm
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirm ? 'text' : 'password'}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                                        >
                                            {showConfirm ? '👁️' : '👁️‍🗨️'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Terms */}
                            <label className="flex items-start space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                    className="w-4 h-4 mt-1 text-primary-600 bg-slate-100 border-slate-300 rounded focus:ring-primary-500"
                                />
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    I agree to the{' '}
                                    <a href="#" className="font-medium text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</a>
                                    {' '}and{' '}
                                    <a href="#" className="font-medium text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a>
                                </span>
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Create Account →
                            </button>
                        </form>

                        {/* Login Link */}
                        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700">
                                Sign in
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register