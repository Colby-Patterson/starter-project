import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserAccount = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Account Settings</h1>
      <p>Hello {user.email}</p>
    </div>
  )
}

export default UserAccount