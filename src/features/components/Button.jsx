import { Link } from "react-router-dom"

function Button({children, type, to}) {
    const base = 'bg-yellow-400 hover:bg-yellow-300'
    const styles ={
        primary: base + ' py-4 px-4 uppercase text-base font-semibold rounded-full text-yellow-950 mt-4  transition-all',
        secondary: base +' uppercase px-4 font-semibold  text-sm rounded-full text-yellow-950 py-2'

        
    }
    if(to) return <Link to={`/${to}`} className={styles[type]}>{children}</Link>

    return (
        <button className={styles[type]}>{children}</button>
    )
}

export default Button
