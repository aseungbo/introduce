import { GoHome } from "react-icons/go";

const SideBar = ({ children }): JSX.Element => {
  return (
    <div className="flex">
      <div className="fixed flex flex-col justify-between w-20 h-screen p-4 bg-black">
        <div className="flex flex-col items-center justify-between">
          <div className="inline-block p-2 text-white bg-green-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black">
            {<GoHome size={20} />}
          </div>
          <span className="w-full border-gray-100 border-b-[1px] p-2"></span>
          <div className="inline-block p-2 my-4 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black">
            <p>Intro</p>
          </div>
          <div className="inline-block p-2 my-4 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black">
            <p>Stack</p>
          </div>
          <div className="inline-block p-2 my-4 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black">
            <p>Project</p>
          </div>
          <div className="inline-block p-2 my-4 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black">
            <p>Contact</p>
          </div>
        </div>
      </div>
      <main className="w-full ml-20">{children}</main>
    </div>
  );
};

export default SideBar;
