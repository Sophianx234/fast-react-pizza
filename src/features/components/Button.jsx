import { Link } from "react-router-dom";

function Button({ children, type, to, handleClick }) {
  const base = "bg-yellow-400 hover:bg-yellow-300 uppercase";
  const styles = {
    primary:
      base +
      " py-4 px-4 uppercase text-base font-semibold rounded-full text-yellow-950 mt-4  transition-all",
    secondary:
      base +
      " uppercase  font-semibold  text-xs rounded-full text-yellow-950 py-2",
    link: " uppercase text-sm",
    linkMain: " text-purple-700 font-bold text-sx tracking-wide  text-sm  ",
  };
  if (to)
    return (
      <Link to={`/${to}`} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button onClick={handleClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
