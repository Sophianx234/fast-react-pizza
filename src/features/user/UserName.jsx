import { useSelector } from "react-redux"
import { getUserName } from "../../store"

function UserName() {
    const name = useSelector(getUserName)
    return (
        <p className="text-md hidden font-semibold uppercase tracking-wide text-yellow-950 sm:block">
        {name}
      </p>
    )
}

export default UserName
