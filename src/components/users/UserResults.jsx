import { useEffect, useState } from "react"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"

const UserResults = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect since we want to make request right when the component hook
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_GITHUB_URL}/users`
        )
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    if (loading) return <Spinner />
    return (
        <div
            className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3
        md:grid-cols-2"
        >
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserResults
