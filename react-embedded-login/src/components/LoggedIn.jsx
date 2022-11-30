export default function LoggedIn ({ user }) {
    return (
        <div>
            <img src={user.profilePictureUrl} alt={user.name} />
            <span>{user.name}</span>
        </div>
    )
}