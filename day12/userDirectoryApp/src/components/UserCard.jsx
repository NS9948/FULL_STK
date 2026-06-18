function UserCard({id,name,username,email}){
    return(
        <div key={id}>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}

export default UserCard;