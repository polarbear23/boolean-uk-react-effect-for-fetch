import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"
function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.data);
        setUsers(result.results);
      });
  }, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div class="scroll-container">
        <UsersList users={users} />
      </div>
    </section>

  )
}

export default UsersSection
