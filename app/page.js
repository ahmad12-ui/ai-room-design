import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center mt-5 px-10 py-4 bg-white shadow-md rounded-lg">
        {/* Header Section */}
        <div className="flex items-center space-x-3">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg ">AI Room Design</h2>
        </div>
        <Link href="/dashboard">
          <Button className="bg-primary text-white hover:bg-primary-dark transition-colors">
            Go to Dashboard
          </Button>
        </Link>
      </div>

      <div className="p-5 m-3 bg-white rounded-lg shadow-lg">
        {/* About Section */}
        <h1 className="text-3xl font-bold text-primary mb-6">
          About AI Room Design Generator
        </h1>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-primary">Our Mission</h2>
          <p className="text-md text-gray-700">
            At AI Room Design Generator, we're revolutionizing the way people
            visualize and plan their room designs. Our mission is to make
            professional room design visualization accessible to everyone
            through the power of artificial intelligence.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-primary">Our Story</h2>
          <p className="text-md text-gray-700">
            Founded by a team of AI enthusiasts and room design experts, AI Room
            Design Generator was created to democratize room design
            visualization. We recognized that traditional interior design
            services were often expensive and time-consuming, so we developed an
            AI-powered solution that makes room design accessible to all.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-primary">Why Choose Us</h2>
          <p className="text-md text-gray-700">
            Our AI Room Design Generator stands out because:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md text-gray-700">
            <li>
              We use advanced AI technology specifically trained for room design
            </li>
            <li>Our service is completely free to use</li>
            <li>We generate unique, personalized room designs</li>
            <li>We focus on realistic and practical room layouts</li>
            <li>We're committed to continuous improvement</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-primary">Our Technology</h2>
          <p className="text-md text-gray-700">
            Our AI room design generator utilizes state-of-the-art machine
            learning algorithms trained on millions of professional room
            designs. This ensures that every generated design is both practical
            and aesthetically pleasing, while maintaining uniqueness for each
            user's specific needs.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-primary">Our Commitment</h2>
          <p className="text-md text-gray-700">We're committed to:</p>
          <ul className="list-disc pl-5 space-y-2 text-md text-gray-700">
            <li>Providing free, high-quality room design visualization</li>
            <li>Continuously improving our AI technology</li>
            <li>Supporting homeowners and design professionals</li>
            <li>Maintaining user privacy and data security</li>
            <li>Offering responsive customer support</li>
          </ul>
        </section>
      </div>

      <div>
        {/* footer */}
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto flex justify-between space-x-12">
            <div className="flex flex-col space-y-5">
              <h4 className="text-lg font-semibold text-primary">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Support Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-5">
              <h4 className="text-lg font-semibold text-primary">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    How to Use
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Best Practices
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Use Cases
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-5">
              <h4 className="text-lg font-semibold text-primary">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <div className="bg-gray-800 text-white py-4 text-center">
          <p className="text-sm">
            © 2024 AI Room Design Generator. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
