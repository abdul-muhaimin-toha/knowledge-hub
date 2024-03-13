import Profile from "./assets/Abdul Muhaimin Toha.jpg";

const Header = () => {
  return (
    <header>
      <div className=" mx-auto max-w-screen-xl px-2  md:px-6">
        <nav className="flex items-center justify-between py-8 ">
          <h1 className="text-4xl font-bold">Knowledge Hub</h1>
          <img
            src={Profile}
            alt="User profile"
            className="h-12 w-12 rounded-full border-4 border-black object-contain"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
