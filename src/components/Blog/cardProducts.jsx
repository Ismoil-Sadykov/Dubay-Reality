import { useEffect, useState } from 'react'
import { prodUrl } from './../../const/const';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardProducts() {

    const [users, setUsers] = useState([])

    async function getUsers() {
        try {
            const { data } = await axios.get(prodUrl)
            setUsers(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {users.map((user) => {
                return (
                    <div className="border border-yellow-400 rounded-lg overflow-hidden shadow-lg flex flex-col transition-transform"
                        key={user.id} >
                        <img
                            src={user.image}
                            alt="Not Found"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {user.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {user.description}
                                </p>
                            </div>
                            <Link to={`/userInfo/${user.id}`}>
                                <button className="mt-auto text-yellow-400 font-semibold cursor-pointer flex items-center gap-1 hover:underline">
                                    Learn more <span>→</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
