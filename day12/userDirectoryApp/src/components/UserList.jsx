import UserCard from "./UserCard";
function UserList({ filteredUsers }) {
    return (
        filteredUsers.map(user => (
            <UserCard
                name = {user.name}
                email = {user.email}
                username = {user.username}
                key = {user.id}
            />
        ))
    );
  }
  
  export default UserList;