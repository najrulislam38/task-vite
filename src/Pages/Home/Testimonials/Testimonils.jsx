import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("./testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="my-20">
      <Container>
        <h2 className="text-center text-3xl md:text-4xl font-poppins font-semibold">
          Testimonials
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {testimonials?.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            ></TestimonialCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
