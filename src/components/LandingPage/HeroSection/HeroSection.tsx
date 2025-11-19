import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image/hero-section.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/60 from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:flex md:items-center md:h-full">
        <div className="max-w-xl text-white">
          <p className="tracking-wide text-sm uppercase opacity-75 mb-2">
            Vibrant Senior Living
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let Us Be Your Trusted Guide
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            We’re here for you along your senior living journey. Find a
            community and ask about our seasonal pricing.
          </p>

          <RadioGroup defaultValue="us" className="flex space-x-6 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="us" id="us" />
              <Label htmlFor="us" className="text-white">
                United States
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ca" id="ca" />
              <Label htmlFor="ca" className="text-white">
                Canada
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-4">
            <Input
              placeholder="Enter City, State, or ZIP"
              className="bg-white text-gray-900"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-1/2 bg-white text-gray-900">
                  <SelectValue placeholder="Select Care Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="assisted">Assisted Living</SelectItem>
                  <SelectItem value="memory">Memory Care</SelectItem>
                  <SelectItem value="respite">Respite Care</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full sm:w-40 bg-rose-600 hover:bg-rose-700 text-white font-semibold flex items-center justify-center gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <button className="mt-6 text-sm font-semibold underline underline-offset-2 hover:text-gray-300">
            VIEW ALL COMMUNITIES
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
