import Image from "next/image";
import React from "react";
import Lottie from "react-lottie";
import Images from "../Images/992-articulation";
import mypic from "../Images/download (1).jpg";
import mypic2 from '../Images/download.jpg';
import mypic1 from "../Images/images.jpg";
function Page1() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Images,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24  md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
            Art Gallery
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            Image result for art gallery.An art gallery is an exhibition space
            to display and sell artworks. As a result, the art gallery is a
            commercial enterprise working with a portfolio of artists. The
            gallery acts as the dealer representing, supporting, and
            distributing the artworks by the artists in question.{" "}
          </p>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
      <div>
        <div className="text-gray-400 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg w-590">
                  <Image
                    src={mypic1}
                    alt="Picture of the author"
                    width="340px"
                    height="300px"
                    priority
                  />
                  <h2 className="text-lg  font-medium title-font mb-2">
                    Sketch art
                  </h2>
                  <p className="leading-relaxed text-base">
                    sketch, traditionally a rough drawing or painting in which
                    an artist notes down his preliminary ideas for a work that
                    will eventually be realized with greater precision and
                    detail. The term also applies to brief creative pieces that
                    per se may have artistic merit.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
              
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg w-590">
                <Image
                    src={mypic2}
                    alt="Picture of the author"
                    width="340px"
                    height="300px"
                    priority
                  />
                  <h2 className="text-lg  font-medium title-font mb-2">
                    Art Gallery
                  </h2>
                  <p className="leading-relaxed text-base">
                    sketch, traditionally a rough drawing or painting in which
                    an artist notes down his preliminary ideas for a work that
                    will eventually be realized with greater precision and
                    detail. The term also applies to brief creative pieces that
                    per se may have artistic merit.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg w-590">
                  <Image
                    src={mypic}
                    alt="Picture of the author"
                    width="300px"
                    height="150px"
                    priority
                  />
                  <h2 className="text-lg font-medium title-font mb-2">
                    Article
                  </h2>
                  <p className="leading-relaxed text-base">
                    sketch, traditionally a rough drawing or painting in which
                    an artist notes down his preliminary ideas for a work that
                    will eventually be realized with greater precision and
                    detail. The term also applies to brief creative pieces that
                    per se may have artistic merit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page1;
