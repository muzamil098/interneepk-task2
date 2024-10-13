import React from "react";
import Link from "next/link";
import Image from "next/image";
function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-2 bg-green-700">
        <Image
          src={"/profile.jpg"}
          height={300}
          width={300}
          className="rounded-full"
          alt="image"
        />

        <h1 className="text-6xl font-bold text-white text-center">Internee.pk Task 2</h1>{" "}
        <br />
        <p className="text-white text-center">
          Making a Next js Web app that performs Server-Side Rendering <br />{" "}
          along with Dynamic Routes
        </p>
        <br />{" "}
        <Link
          href={"/articles"}
          className=" bg-white  text-green-700 px-4 py-1"
        >
          Read Articles
        </Link>
    </div>
  );
}

export default Hero;
