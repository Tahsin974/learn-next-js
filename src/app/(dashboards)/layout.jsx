import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* sidebar */}
      <nav className="col-span-3 w-full bg-gray-300 p-4">
        <h1 className="text-2xl font-bold text-center">Next Js App</h1>
        <ul className="  text-black h-screen  space-y-3.5 p-4">
          <li>
            <Link href="/user-dashboard">User Dashboard</Link>
          </li>

          <li>
            <Link href="/admin-dashboard">Admin Dashboard</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      {/* dashboard content */}
      <div className="col-span-9 w-full bg-amber-300 p-4">{children}</div>
    </div>
  );
};

export default layout;
