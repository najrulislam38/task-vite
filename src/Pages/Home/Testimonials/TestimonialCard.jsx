const TestimonialCard = ({ testimonial }) => {
  console.log(testimonial);
  const { id, image, name, profession, reviews } = testimonial;
  return (
    <div className="rounded-md overflow-hidden bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" className="w-full h-[250px] object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span>{profession}</span>
        <p className="text-justify test-sm text-gray-500">{reviews}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
