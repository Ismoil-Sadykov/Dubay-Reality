import { Button, IconButton, Input } from '@mui/material';
import photo1 from '../images/Group 87.png'
import './styles.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useEffect, useRef, useState } from 'react';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import CardProduct from './CardProduct';
import photo2 from '../images/placeholder (1).png'
import photo3 from '../images/placeholder (2).png'
import { fileUrl, url } from './../const/const';
import axios from 'axios';
import videoPhoto from "../images/placeholder.png"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Main() {

    const [users, setUsers] = useState([])

    async function getUsers() {
        try {
            const { data } = await axios.get(url)
            setUsers(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteUsers = async (id) => {
        try {
            await axios.delete(`${url}?id=${id}`)
            getUsers()
        } catch (error) {
            console.error(error);
        }
    }

    const ref = useRef(null)

    const handlePlay = () => {
        ref.current.play()
    }

    const handlePause = () => {
        ref.current.pause()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div className="relative flex flex-col items-center justify-center text-center w-full b">
                <img src={photo1} alt="Not Found" className="w-full md:w-auto" />
                <div className="flex absolute mt-130 md:ml-96 p-5 md:gap-30 justify-center bg-[#272727] p-4">
                    <div className="md:flex items-center gap-4">
                        <p className="text-[#FCD54C] font-bold text-4xl sm:text-5xl">01</p>
                        <p className="text-sm sm:text-base font-semibold">Lorem Ipsum Dolorem apset</p>
                    </div>
                    <div className="md:flex items-center gap-4">
                        <p className="font-bold text-4xl sm:text-5xl">02</p>
                        <p className="text-sm sm:text-base font-semibold">Lorem Ipsum Dolorem apset</p>
                    </div>
                    <div className="md:flex items-center gap-4">
                        <p className="font-bold text-4xl sm:text-5xl">03</p>
                        <p className="text-sm sm:text-base font-semibold">Lorem Ipsum Dolorem apset</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 px-4 sm:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:justify-between gap-5">
                    <p className="text-3xl sm:text-4xl font-bold">Latest projects</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                        <p className="text-sm sm:text-base font-semibold text-[#FCD54C]">All</p>
                        <p className="text-sm sm:text-base font-semibold">Building</p>
                        <p className="text-sm sm:text-base font-semibold">Interior</p>
                        <p className="text-sm sm:text-base font-semibold">View all projects</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto my-10">
                    <div className="b1 relative h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg overflow-hidden">
                        <div className="absolute bottom-5 left-5 text-white font-semibold text-xl">
                            Villas
                        </div>
                    </div>
                    <div className="bg-[#FCD54C] h-[300px] sm:h-[400px] p-6 sm:p-8 rounded-lg flex flex-col justify-center text-center lg:text-left">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Dubai</h2>
                        <p className="text-gray-800 mb-6 leading-relaxed text-sm sm:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            molestie integer aliquam consectetur. Faucibus vitae dui massa tellus
                            magna sit.
                        </p>
                        <button className="font-semibold text-black hover:underline">
                            See project →
                        </button>
                    </div>
                    <div className="b2 relative h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg overflow-hidden">
                        <div className="absolute bottom-5 left-5 text-white font-semibold text-xl">
                            Houses
                        </div>
                    </div>
                    <div className="b3 relative h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg overflow-hidden">
                        <div className="absolute bottom-5 left-5 text-white font-semibold text-xl">
                            Villas
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 px-4 sm:px-10 text-center lg:text-left">
                <p className="text-[#FCD54C] text-base sm:text-lg font-semibold mb-4">Our expertise</p>
                <p className="text-3xl sm:text-5xl font-bold mb-4">"The best apartment in Dubai" we will find your dream</p>
                <p className="text-sm sm:text-base max-w-4xl mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center px-4">
                <video ref={ref} width="100%" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls={false} className="max-w-[90%] rounded-lg" poster={videoPhoto}></video>
                <div className="flex justify-center gap-8 mt-4">
                    <IconButton onClick={handlePlay}>
                        <PlayCircleIcon className="text-[#FCD54C]" sx={{ width: "50px", height: "50px" }} />
                    </IconButton>
                    <IconButton onClick={handlePause}>
                        <PauseCircleIcon className="text-[#FCD54C]" sx={{ width: "50px", height: "50px" }} />
                    </IconButton>
                </div>
            </div>
            <div className="mt-16 border border-[#FCD54C] p-6 sm:p-10 mx-4 sm:mx-10 text-center">
                <p className="text-sm sm:text-lg leading-relaxed">
                    “Don’t limit yourself. Many people limit themselves to what they think they can do.
                    You can go as far as your mind lets you. What you believe, remember, you can achieve.”
                    <span className="text-[#FCD54C]"> — Mary Kay Ash </span>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-16 px-4">
                <CardProduct image={photo2} nameP={"Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci."} />
                <CardProduct image={photo3} nameP={"Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut ullamcorper dapibus ante, eu tincidunt orci feugiat vel. Curabitur eget lectus lectus. Pellentesque malesuada, felis at accumsan interdum, nisl mi fermentum est, eu suscipit dui lorem a dui. Aliquam rhoncus risus in leo vestibulum efficitur. Suspendisse tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspen disse et metus et orci rutrum dictum eu eu nibh. Suspendisse blandit in diam in rhoncus. Nam volutpat hendrerit enim, sed aliquet quam gravida at. Nullam dictum sagittis nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum sed sodales. Curabitur varius iaculis felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum elementum, nulla magna tincidunt urna, a venenatis dolor arcu sed leo. "} />
            </div>
            <div className="b5 text-center mt-20 py-10 px-4">
                <p className="text-[#272727] text-base sm:text-lg font-bold">Do you have any questions?</p>
                <p className="text-[#272727] text-5xl sm:text-7xl font-extrabold mb-6">Contact us</p>
                <div className="flex justify-center">
                    <Input className="bg-white w-full sm:w-[400px] h-[50px] px-3 rounded-md" placeholder="Enter your mail" />
                    <Button sx={{ backgroundColor: "black", height: "50px", width: "140px", color:"white"}}>Send</Button>
                </div>
            </div>
            <div className="mt-16 px-4 sm:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-5">
                    <p className="text-3xl sm:text-4xl font-bold">Useful articles</p>
                    <p className="text-sm sm:text-base font-semibold">View all articles</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto my-10">
                    <div className="b1 relative h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg overflow-hidden">
                        <div className="absolute bottom-5 left-5 text-white font-semibold text-xl">
                            Discover Architecture
                        </div>
                    </div>
                    <div className="bg-inherit h-[300px] sm:h-[400px] p-6 sm:p-8 rounded-lg flex flex-col justify-center text-center lg:text-left">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Jule 03, 2022</h2>
                        <p className="text-white mb-4 text-sm sm:text-base">Discover Architecture</p>
                        <p className="text-[#929292] mb-4 text-sm sm:text-base">
                            Projects for many large domestic and foreign corporations...
                        </p>
                        <button className="font-semibold text-[#FCD54C] hover:underline">
                            Learn More →
                        </button>
                    </div>
                    <div className="b2 relative h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg overflow-hidden">
                        <div className="absolute bottom-5 left-5 text-white font-semibold text-xl">
                            Discover Architecture
                        </div>
                    </div>
                    <div className="b3 relative h-[300px] sm:h-[400px] bg-cover bg-center rounded-lg overflow-hidden">
                        <div className="absolute bottom-5 left-5 text-white font-semibold text-xl">
                            Villas
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-16 px-4">
                {
                    users.map((user) => (
                        <div key={user.id} className="border border-[#FCD54C] p-6 sm:p-10 text-center w-full sm:w-[300px]">
                            <img src={`${fileUrl}${user.images[0]?.imageName}`} alt={user.name} className="w-[112px] h-[112px] rounded-full mx-auto mb-4" />
                            <p className="font-semibold mb-2">{user.name}</p>
                            <p className="mb-[20px] text-sm text-gray-300">{user.description}</p>
                            <Button color='error' variant='contained' onClick={() => deleteUsers(user.id)}>
                                <DeleteIcon />
                            </Button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
