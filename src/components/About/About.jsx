import { Button, Input } from '@mui/material'
import './aboutStyle.css'
import photo1 from '../About/aboutImages/1110x628.png'
import photo2 from '../About/aboutImages/540x634.png'
import photo3 from '../About/aboutImages/540x302.png'
import photo4 from '../About/aboutImages/530x302.png'
import photo5 from '../About/aboutImages/350x350.png'
import photo6 from '../About/aboutImages/350x350 (1).png'


export default function About() {
    return (
        <>
            <div className="text-white font-sans">
                <section className="relative">
                    <div className="b6 flex items-center justify-center text-center">
                        <div className="px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Furnished Apartments in Dubai
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-5 py-12 space-y-6">
                    <p className="text-gray-300">
                        This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.
                    </p>
                    <p className="text-gray-300">
                        One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all:
                    </p>
                    <p className="text-gray-300">
                        This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.
                    </p>
                    <p className="text-gray-300">
                        One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all:
                    </p>

                    <img
                        src={photo1}
                        alt=""
                        className="w-full rounded-lg mt-6"
                    />

                    <p className="text-gray-300 leading-relaxed font-bold text-[25px]">
                        Methods for Everyone
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
                    </p>
                </section>

                <section className="py-8 px-6 md:px-12 text-center border border-yellow-400 max-w-4xl mx-auto my-12">
                    <p className="text-lg text-gray-100">
                        <span className='text-[50px] font-bold text-[#FCD54C]'>"</span>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. emotional sensation of stress from our firs
                    </p>
                </section>

                <section className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 md:ml-[200px]">
                    <div className='flex flex-col gap-[20px]'>
                        <img
                            src={photo4}
                            alt=""
                            className="rounded-lg w-full object-cover"
                        />
                        <img
                            src={photo3}
                            alt=""
                            className="rounded-lg w-full object-cover"
                        />
                    </div>
                    <img
                        src={photo2}
                        alt=""
                        className="rounded-lg w-full object-cover md:col-span-2 lg:col-span-1"
                    />
                </section>

                <section className="py-10 text-center">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-400">20</h3>
                            <p className="text-gray-300">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-400">7</h3>
                            <p className="text-gray-300">Markets Covered</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-yellow-400">100+</h3>
                            <p className="text-gray-300">Completed Projects</p>
                        </div>
                    </div>
                </section>
                <div className="b7 text-center mt-20 py-10 px-4">
                    <p className="text-[#272727] text-base sm:text-lg font-bold">Do you have any questions?</p>
                    <p className="text-[#272727] text-5xl sm:text-7xl font-extrabold mb-6">Contact us</p>
                    <div className="flex justify-center">
                        <Input className="bg-white w-full sm:w-[400px] h-[50px] px-3 rounded-md" placeholder="Enter your mail" />
                        <Button sx={{ backgroundColor: "black", height: "50px", width: "140px" }}>Send</Button>
                    </div>
                </div>

                <section className="max-w-5xl mx-auto px-5 py-12">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FCD54C] text-[#272727]">
                                    <th className="p-3">Included in the package</th>
                                    <th className="p-3">Complete management</th>
                                    <th className="p-3">Not included</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {[
                                    "Real estate advertising",
                                    "Rental & Tenant",
                                    "Consulting & lease agreement",
                                    "Listing setup",
                                    "Payment & request response",
                                ].map((item, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-b border-gray-700"
                                    >
                                        <td className="p-3">{item}</td>
                                        <td className="p-3 text-center">✔️</td>
                                        <td className="p-3 text-center">✔️</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-5 py-12">
                    <h3 className="text-2xl font-semibold mb-6">We also propose</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                src={photo5}
                                alt="Mortgage Registration"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-xl font-semibold mb-2">
                                    Mortgage Registration
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Assistance with registering your mortgage in Dubai.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FCD54C] h-[300px] sm:h-[400px] p-6 sm:p-8 rounded-lg flex flex-col justify-center text-center lg:text-left">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Mortgage Registration</h2>
                            <p className="text-gray-800 mb-6 leading-relaxed text-sm sm:text-base">
                                A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                            </p>
                            <button className="font-semibold text-black hover:underline">
                                Learn more →
                            </button>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                src={photo6}
                                alt="Investment Consulting"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-xl font-semibold mb-2">
                                    Investment Consulting
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Get advice on where and how to invest in Dubai real estate.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
