import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header
      className="
      fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[85%] max-w-4xl
      flex justify-between items-center p-4
      bg-black/30 backdrop-blur-md border border-gray-500/30 rounded-3xl shadow-2xl
      text-gray-100 font-semibold"
    >
      <h1 className="pl-2 font-bold">Logo</h1>

      <nav className="flex gap-4">
        <NavLink
          className="
          rounded-full px-4 py-2 transition-all
          duration-200 hover:bg-white/20 active:scale-95"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="
          rounded-full px-4 py-2 transition-all
          duration-200 hover:bg-white/20 active:scale-95"
          to="/trivia"
        >
          Trivia
        </NavLink>
      </nav>
    </header>
  );
}
