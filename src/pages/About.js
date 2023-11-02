import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-4">
      <div className="max-w-xl w-full">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            It started with an Airline Pilot who was hit by the Covid crisis that decided it was time to start selling products on Amazon.com. On his way to launch his store he found that it’s extremely time consuming and hard to find viable products to sell online. It’s a highly competitive market where risks can be high and in combination with that there was no tool out there that matched existing products with their manufacturer.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We want to help online merchants to find the best possible products for them to sell in their stores.

            Our grand vision is to interconnect all the world’s leading marketplaces with the leading sourcing sites. Giving you an all-seeing eye and cheatsheet of what to do next on your sourcing journey.

            Imagine if you could know not only what product to sell, but also how many and when to sell it. This coupled with a freight optimizer and trend engine will lead to a more efficient sustainable world where no product is sourced that won’t be sold.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <p className="text-gray-700">
            Our matching AI goes through millions of products every day. Once a match is found, we calculate all available metrics and present it to our users.

            With the power of AWS and Nvidia we have built the world’s first scalable reverse sourcing platform.

            With the help of our platform we are empowering the sellers to take data-driven decisions on what products to sell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
