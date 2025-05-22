import Link from "next/link";

const page = ({ params }) => {
  const steps = params.steps;
  return (
    <div>
      <Link href="/about/personal/education">
        <button className="btn btn-accent">Go To</button>
      </Link>
    </div>
  );
};

export default page;
