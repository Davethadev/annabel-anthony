"use client";

import Image from "next/image";
import { useEffect } from "react";
import { testimonials } from "../constants";
import { TestimonialsSlider } from "./TestimonialsSlider";
import { useTestimonialAnimation } from "../hooks/useTestimonialAnimation";

const Testimonials = () => {
  const {
    nextTestimonial,
    prevTestimonial,
    updateCards,
    isFirstCard,
    isLastCard,
  } = useTestimonialAnimation(testimonials);

  useEffect(() => {
    updateCards();
  }, [updateCards]);

  return (
    <div id="testimonials" className="w-full">
      <div className="w-[90%] mx-auto text-center">
        <div className="bg-charleston_green relative h-auto lg:h-[720px] pt-20 pb-8 rounded-b-2xl space-y-12 w-full">
          <div className="space-y-3">
            <h2 className="font-satoshi font-semibold text-white text-xl md:text-4xl leading-tight">
              Testimonials
            </h2>
            <p className="font-satoshi font-light text-base text-white">
              Don&apos;t believe me, hear it from the <br /> others
            </p>
          </div>
          <div className="lg:hidden">
            <TestimonialsSlider />
          </div>
          <div className="relative w-full h-full hidden lg:block">
            {!isFirstCard && (
              <button
                className={
                  "h-10 w-10 bg-white rounded-full grid grid-cols-1 place-content-center place-items-center absolute z-20 left-8 top-60"
                }
                onClick={prevTestimonial}
              >
                <Image
                  src={"/assets/arrow-left.svg"}
                  alt=""
                  width={8}
                  height={14}
                  className="w-4 h-4"
                />
              </button>
            )}

            <div className="cards relative">
              <div className="card">
                <article className={`px-12 pt-20 pb-6 w-full text-left`}>
                  <div className="space-y-3">
                    <p className="font-satoshi font-normal text-sm text-black">
                      I had the pleasure of working with Annabel and she
                      consistently delivered outstanding UI/UX designs.
                      Annabel&apos;s attention to detail and user-centered
                      approach resulted in intuitive and visually appealing
                      interfaces.
                    </p>
                    <p className="font-satoshi font-normal text-sm text-black">
                      She excels at balancing aestethics with functionality,
                      ensuring that our products not only looked great but also
                      provided a seamless user experience. Annabel is a
                      collaborative team player and a true asset to any team. I
                      highly recommend her for any UI/UX design role.
                    </p>
                  </div>
                  <div className="absolute right-4 bottom-4 text-right">
                    <h3 className="font-satoshi font-bold text-lg text-black">
                      Zainab Oyedeji
                    </h3>
                    <small className="font-satoshi font-normal text-xs text-black">
                      Front-end Engineer
                    </small>
                  </div>
                </article>
              </div>
              <div className="card">
                <div className="h-2 w-full drop-shadow-2xl bg-bright_gray"></div>
                <article className={`px-6 pt-20 pb-6 w-full text-left`}>
                  <div className="space-y-3">
                    <p className="font-satoshi font-normal text-sm text-black">
                      Annabel is an exceptionally talented and dedicated UI/UX
                      designer with a keen eye for detail and a deep
                      understanding for user experience. Her ability to create
                      intuitive and functional interfaces is impressive. Annabel
                      is also some one who is always pushing herself to learn.
                    </p>
                    <p className="font-satoshi font-normal text-sm text-black">
                      Beyond her technical skills, She is a pleasure to work
                      with. She is a team player who is always willing to share
                      her knowledge and expertise. Her positive attitude and her
                      problem-solving abilities make her a valuable asset to any
                      team.
                    </p>
                  </div>
                  <div className="absolute right-4 bottom-4 text-right">
                    <h3 className="font-satoshi font-bold text-lg text-black">
                      Salim Abubakar
                    </h3>
                    <small className="font-satoshi font-normal text-xs text-black">
                      Software Engineer
                    </small>
                  </div>
                </article>
              </div>
              <div className="card">
                <div className="h-2 w-full drop-shadow-2xl bg-bright_gray"></div>
                <article className={`px-6 pt-20 pb-6 w-full text-left`}>
                  <div className="space-y-3">
                    <p className="font-satoshi font-normal text-sm text-black">
                      Great team player! She&apos;s got a good sense of designs
                      and layouts, understands the end user and embeds their
                      needs in her designs. I definitely recommend Annabel!
                    </p>
                  </div>
                  <div className="absolute right-4 bottom-4 text-right">
                    <h3 className="font-satoshi font-bold text-lg text-black">
                      Arinze Ihemedu
                    </h3>
                    <small className="font-satoshi font-normal text-xs text-black">
                      Senior Front-end Engineer
                    </small>
                  </div>
                </article>
              </div>
              <div className="card">
                <div className="h-2 w-full drop-shadow-2xl bg-bright_gray"></div>
                <article className={`px-6 pt-12 pb-6 w-full text-left`}>
                  <div className="space-y-3">
                    <p className="font-satoshi font-normal text-sm text-black">
                      I had the pleasure of working with Annabel on various
                      projects which include HrDesk, Spenda, and Ridepay and I
                      am thrilled to recommend her for any UI/UX design role.
                      Annabel&apos;s proficiency in UI/UX design is outstanding,
                      and her dedication to her craft is evident in every
                      project she undertakes.
                    </p>
                    <p className="font-satoshi font-normal text-sm text-black">
                      Annabel consistently delivers exceptional design solutions
                      that are both aesthetically pleasing and highly
                      functional. Her ability to understand user needs and
                      translate them into intuitive, user-friendly interfaces is
                      truly impressive. Throughout our collaboration on the
                      projects, she demonstrated remarkable creativity,
                      attention to detail, and a deep understanding of design
                      principles.
                    </p>
                    <p className="font-satoshi font-normal text-sm text-black">
                      One of Annabel&apos;s greatest strengths is her ability to
                      communicate and collaborate effectively with
                      cross-functional teams. She is always open to feedback and
                      willing to iterate on her designs to ensure the best
                      possible user experience. Her positive attitude and strong
                      work ethic made her a joy to work with and a valuable
                      asset to our team.
                    </p>
                    <p className="font-satoshi font-normal text-sm text-black">
                      I highly recommend Annabel for any UI/UX design position.
                      She has the skills, passion, and dedication needed to
                      excel in her field, and I am confident that she will
                      continue to create exceptional designs that enhance user
                      experiences.
                    </p>
                  </div>
                  <div className="absolute right-4 bottom-4 text-right">
                    <h3 className="font-satoshi font-bold text-lg text-black">
                      Majiri Eyowel
                    </h3>
                    <small className="font-satoshi font-normal text-xs text-black">
                      Senior software engineer
                    </small>
                  </div>
                </article>
              </div>
              {/* {testimonials.map((testimonial) => {
                const { comments, name, role } = testimonial;
                return (
                  <div
                    key={testimonial.id}
                    className="card relative lg:absolute bg-bright_gray right-0 left-0 top-0 w-[90%] lg:w-[904px] mx-auto h-auto lg:h-96 rounded-lg"
                  >
                    <article className={`px-6 pt-12 pb-6 w-full text-left`}>
                      <div className="space-y-3">
                        {comments.map((comment, index) => {
                          return (
                            <p
                              key={index}
                              className="font-satoshi font-normal text-sm text-black"
                            >
                              {comment}
                            </p>
                          );
                        })}
                      </div>
                      <div className="absolute right-4 bottom-4 text-right">
                        <h3 className="font-satoshi font-bold text-lg text-black">
                          {name}
                        </h3>
                        <small className="font-satoshi font-normal text-xs text-black">
                          {role}
                        </small>
                      </div>
                    </article>
                  </div>
                );
              })} */}
            </div>
            {!isLastCard && (
              <button
                className={
                  "h-10 w-10 bg-white rounded-full grid grid-cols-1 place-content-center place-items-center absolute z-20 right-8 top-60"
                }
                onClick={nextTestimonial}
              >
                <Image
                  src={"/assets/arrow-right.svg"}
                  alt=""
                  width={8}
                  height={14}
                  className="w-4 h-4"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
