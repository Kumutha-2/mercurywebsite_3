import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Counter from "@/components/ui/counter";

const HeroSection = () => {
  return (
    <section className="relative bg-#0a2348 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Unleash the Flow.<br />
              <span className="text-mercury-red">Master the control.</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Largest Manufacturer of Valves & Pipes<br />
              <span className="font-semibold">Manufacturers | Traders | Importers</span>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <Button className="bg-mercury-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-mercury-blue px-8 py-3 rounded-lg font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Industrial valve manufacturing"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <Counter 
                    end={35} 
                    duration={2000} 
                    className="text-3xl font-bold text-mercury-blue"
                  />
                  <div className="text-sm text-mercury-gray">Years Experience</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <Counter 
                    end={865} 
                    duration={2000} 
                    className="text-3xl font-bold text-mercury-blue"
                  />
                  <div className="text-sm text-mercury-gray">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;