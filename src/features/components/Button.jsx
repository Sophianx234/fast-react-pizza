function Button({children}) {
    const base = 'bg-yellow-400'
    const styles ={
        primary: base + ' p-2 px-4 uppercase text-base font-semibold rounded-full text-yellow-950 mt-4 hover:bg-yellow-300 transition-all'
        
    }
    return (
        <button className={styles.primary}>{children}</button>
    )
}

export default Button
