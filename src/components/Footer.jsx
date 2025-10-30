import logo from '../images/Logo.png'
import social from '../images/social icons.png'

export default function Footer() {
    return (
        <>
            <footer className="max-w-[1980px] mx-auto p-6 sm:p-10 mt-20 text-center lg:text-left">
                <section className="max-w-[1600px] mx-auto flex flex-col gap-6 border-t border-b border-white py-8">
                    <img src={logo} alt="" className="w-[150px] sm:w-[180px] mx-auto mb-4" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-[#8a8989] text-xs sm:text-sm justify-items-center">
                        <article>
                            <h1 className="text-base sm:text-lg mb-2 text-white">Buy</h1>
                            <p>Apartment in Dubai</p>
                            <p>House in Dubai</p>
                            <p>Apartments in Dubai</p>
                            <p>Loft in Dubai</p>
                            <p>Penthouse in Dubai</p>
                            <p>Villa in Dubai</p>
                        </article>
                        <article>
                            <h1 className="text-base sm:text-lg mb-2 text-white">Services</h1>
                            <p>Property management</p>
                            <p>Sell property</p>
                            <p>Rent property</p>
                            <p>Investments</p>
                            <p>Real estate for crypto</p>
                            <p>Moving to Dubai</p>
                        </article>
                        <article>
                            <h1 className="text-base sm:text-lg mb-2 text-white">Information</h1>
                            <p>Video</p>
                            <p>Podcasts</p>
                            <p>Laws</p>
                            <p>Questions</p>
                            <p>Books</p>
                            <p>Articles</p>
                        </article>
                        <article>
                            <h1 className="text-base sm:text-lg mb-2 text-white">About company</h1>
                            <p>Jobs</p>
                            <p>Story</p>
                            <p>Licenses</p>
                            <p>Why us</p>
                            <p>Agency</p>
                        </article>
                        <article>
                            <h1 className="text-base sm:text-lg mb-2 text-white">Contact</h1>
                            <p>964 Worthington Drive</p>
                            <p>Dubai, UAE</p>
                            <p>dubairealty@mail.com</p>
                        </article>
                    </div>
                </section>
            </footer>
            <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-6 gap-4">
                <p className="text-white text-xs sm:text-sm">Copyright © 2022 Dubai Realty</p>
                <img src={social} alt="" className="w-[120px] sm:w-auto" />
            </div>
        </>
    )
}
