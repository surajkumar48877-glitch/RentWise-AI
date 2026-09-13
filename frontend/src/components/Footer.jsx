function Footer() {
    return (
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
                            <li><a href="/properties" className="hover:text-primary-400 transition-colors">Find Properties</a></li>
                            <li><a href="/list-property" className="hover:text-primary-400 transition-colors">List Property</a></li>
                            <li><a href="/analytics" className="hover:text-primary-400 transition-colors">Analytics</a></li>
                            <li><a href="/fair-rent" className="hover:text-primary-400 transition-colors">Fair Rent Checker</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-primary-400 transition-colors">About Us</a></li>
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
    )
}

export default Footer