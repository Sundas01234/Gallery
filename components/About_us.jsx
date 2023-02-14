import Image from "next/image";
import { React } from "react";

import images from "../Images/images (2).jpg";
function About_us() {
  
  return (
    <div>
        
        <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pl-10  md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
            Art Gallery's story
          </h1>
          <p className="mb-6 leading-relaxed text-xl">
          Opening in 2022, with the dream of being at the forefront of recognizing Art’s role in American Art, Elizabeth Moss created Moss Galleries in Falmouth, Maine. Over the course of 17 years, Elizabeth and her team have established a gallery of national and international repute, recently being named one of the top 500 Galleries in North America by ArtInfo. The success of the gallery is based on the backbone of strong and trusting relationships between the artists, the Moss Gallery staff, and Elizabeth Moss herself. At Moss Galleries, we take pride in having a mutually beneficial relationship with our represented artists.  
          </p>
        </div>
        <div>
        <Image
                    src={images}
                    alt="Picture of the author"
                    width="440px"
                    height="500px"
                    priority
                  />
    </div>
      </div>
   
    </section>
    </div>
  )
}
export default About_us
