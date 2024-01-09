/* eslint-disable */
function Header({ title, desc }) {
  return (
    <div className="my-16 flex-center flex-col px-4 sm:px-16 ">
      <h2 className="font-main text-h2">{title}</h2>
      <span className="-mt-3 mb-2 text-green2 text-h2">━━━</span>
      <p className="text-center text-pageHeader tracking-wide">
        {desc}
      </p>
    </div>
  );
}

export default Header;
