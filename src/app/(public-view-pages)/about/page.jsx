import Link from "next/link";
export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">About Page</h1>
      <Link href="/about/personal">
        <button className="btn btn-accent">Go To</button>
      </Link>
    </div>
  );
};

export default AboutPage;
