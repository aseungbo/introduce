const Header = (): JSX.Element => {
  return (
    <div className="flex justify-center w-full gap-2 p-4">
      <span className="animate-wiggle">👋🏻</span>
      <div className="inline-block">
        <p className="text-2xl w-0 overflow-hidden whitespace-nowrap animate-typing border-r-[2px]">
          Hello I'm James An.
        </p>
      </div>
    </div>
  );
};

export default Header;
