import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { prodUrl } from "../const/const"

export default function UserInfo() {
    const { id } = useParams()

    const [user, setUser] = useState({})

    async function getUserById(id) {
        try {
            const { data } = await axios.get(`${prodUrl}/${id}`)
            setUser(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserById(id)
    }, [id])

    return (
        <>
            <div className="flex items-center p-5 gap-5">
                <img src={user.image} alt="" />
                <div>
                    <p className="text-[20px] font-bold mb-10 text-[#6e6c6c]">{user.title}</p>
                    <p className="text-[36px] font-extrabold mb-5">{user.description}</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem tempora error iste cum, excepturi architecto. Provident laudantium quo saepe placeat itaque at minus, voluptatum obcaecati molestiae, incidunt expedita ducimus.</p>
                </div>
            </div>
        </>
    )
}
