const ServiceDetailsPage = ({ params }) => {
  const slug = params.slug;
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Service Details</h1>
      <p>Service: {slug}</p>
    </div>
  );
};

export default ServiceDetailsPage;
