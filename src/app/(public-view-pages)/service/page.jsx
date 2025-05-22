"use client";
import { useRouter } from "next/navigation";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      slug: "web-design",
      description:
        "Professional website design with responsive layouts and modern UI/UX principles.",
      price: 299,
      category: "Design",
    },
    {
      id: 2,
      title: "Frontend Development",
      slug: "frontend-development",
      description:
        "Building fast and interactive websites using React, Vue, or vanilla JavaScript.",
      price: 399,
      category: "Development",
    },
    {
      id: 3,
      title: "Backend Development",
      slug: "backend-development",
      description:
        "Secure and scalable backend development using Node.js and Express.",
      price: 449,
      category: "Development",
    },
    {
      id: 4,
      title: "SEO Optimization",
      slug: "seo-optimization",
      description:
        "Improve your site ranking with proven SEO strategies and audits.",
      price: 199,
      category: "Marketing",
    },
    {
      id: 5,
      title: "Content Writing",
      slug: "content-writing",
      description:
        "High-quality blog posts, product descriptions, and web content.",
      price: 99,
      category: "Content",
    },
    {
      id: 6,
      title: "UI/UX Consultation",
      slug: "ui-ux-consultation",
      description:
        "Expert advice to improve user experience and interface design.",
      price: 159,
      category: "Design",
    },
  ];

  // Programmatically Navigate Between Pages useRouter is use
  const router = useRouter();
  const handleServiceDetailsBtn = (slug) => {
    router.push(`/service/${slug}`);
  };
  return (
    <div className="grid grid-cols-1 place-content-center place-items-center gap-7 px-4 py-20">
      <h1 className="text-2xl font-bold text-center">Service Page</h1>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="card bg-white text-black  shadow-sm"
            >
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-sm font-light">
                  Category: {service.category}
                </p>
                <p>{service.description}</p>
                <p className="text-xl font-semibold">Price: {service.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleServiceDetailsBtn(service.slug)}
                    className="btn btn-primary"
                  >
                    Service Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;
