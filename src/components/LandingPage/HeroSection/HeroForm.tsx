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

const HeroForm = () => {
  return (
    <div className="space-y-4 w-full max-w-lg">
      <RadioGroup
        defaultValue="us"
        className="flex items-center gap-6 text-white"
      >
        <Label className="flex items-center gap-2">
          <RadioGroupItem value="us" />
          United States
        </Label>

        <Label className="flex items-center gap-2">
          <RadioGroupItem value="ca" />
          Canada
        </Label>
      </RadioGroup>

      <Input
        placeholder="Enter City, State, or ZIP"
        className="h-14 bg-white text-black rounded-none shadow-sm"
      />

      <div className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-1/2 h-14 bg-white text-black rounded-none shadow-sm">
            <SelectValue placeholder="Select Care Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="assisted">Assisted Living</SelectItem>
            <SelectItem value="memory">Memory Care</SelectItem>
            <SelectItem value="respite">Respite Care</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          className="h-14 w-1/2 bg-white/5 border-white/30 text-white rounded-none backdrop-blur-sm"
        >
          <Search className="h-4 w-4 mr-2" />
          SEARCH
        </Button>
      </div>

      <button className="text-sm text-white font-semibold tracking-wide underline underline-offset-4">
        VIEW ALL COMMUNITIES
      </button>
    </div>
  );
};

export default HeroForm;
