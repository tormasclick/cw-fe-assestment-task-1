import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import avatarImage from "./avatar.jpg"; // Import image from src

interface TagListProps {
  title: string;
  tags: string[];
}

function TagList({ title, tags }: TagListProps) {
  return (
    <div className="mt-8 w-[928px] mx-auto">
      <h2 className="text-[18px] font-bold font-inter text-white bg-[--search-bg] px-2 py-1 rounded">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 mt-4">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="inline-flex items-center justify-center rounded-md w-fit whitespace-nowrap shrink-0 h-[28px] px-4 py-[4px] text-[14px] font-medium font-inter text-white !bg-[#293038] border-none"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

interface SearchBarProps {
  onSearch: (search: string) => void;
  className?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderColor?: string;
  iconSize?: number;
  showButton?: boolean;
}

function SearchBar({
  onSearch,
  className = "",
  placeholder = "Type to search...",
  width = "w-full",
  height = "h-16",
  bgColor = "bg-[--search-bg]",
  borderColor = "",
  iconSize = 20,
  showButton = true,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSearch = useCallback(() => {
    onSearch(value);
  }, [value, onSearch]);

  return (
    <div
      className={`flex items-center ${bgColor} px-4 py-2 rounded-[12px] ${width} ${height} ${className}`}
    >
      <label htmlFor="search-input" className="sr-only">Search</label>
      <Search
        className="text-[--search-border] mr-3"
        style={{ width: iconSize, height: iconSize }}
        aria-hidden="true"
      />
      <Input
        id="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none text-white placeholder:text-[--search-border] text-[16px] font-work-sans focus:ring-0 focus:outline-none"
        aria-label="Search for words, phrases, and meanings"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      {showButton && (
        <Button
          onClick={handleSearch}
          className="bg-[--search-btn] !bg-[#1A80E5] hover:!bg-[#1A80E5]/90 text-white w-[98px] h-[48px] ml-4 rounded-[12px]"
        >
          Search
        </Button>
      )}
    </div>
  );
}

function HeroSection() {
  const onSearch = useCallback((search: string) => {
    console.log(search);
  }, []);

  return (
    <div className="w-[928px] h-[480px] mx-auto rounded-[--radius-lg] overflow-hidden relative">
      <img
        src="/task1/hero-bg.png"
        alt="Hero background image for search section"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[48px] font-bold font-inter text-white leading-tight">
          Search for words, phrases and<br /> meanings
        </h1>
        <SearchBar
          onSearch={onSearch}
          className="mt-6"
          width="w-[480px]"
          height="h-[64px]"
          bgColor="!bg-[#3D4754]"
          borderColor="border-[--search-border]"
          iconSize={20} 
          showButton={true}
        />
      </div>
    </div>
  );
}

function Header() {
  const onSearch = useCallback((search: string) => {
    console.log(search);
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-12 sm:px-16 py-2 mx-12 sm:mx-16 dark:bg-background border-b border-[--search-border]">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Wortionary application logo" className="w-4 h-4" />
        <div className="text-white font-bold font-inter text-[18px]">Wortionary</div>
      </div>
      <div className="flex items-center gap-4">
        <SearchBar
          onSearch={onSearch}
          width="w-[160px]"
          height="h-[40px]"
          bgColor="!bg-[#9EABB8]"
          placeholder="Search"
          iconSize={16} 
          showButton={false}
        />
        <Avatar className="w-8 h-8">
          <AvatarImage src={avatarImage} alt="User avatar" className="!w-8 !h-8 !block !object-cover" loading="eager" />
          <AvatarFallback className="text-white">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function App() {
  const tags = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ];

  return (
    <main className="min-h-screen text-white flex flex-col items-center !bg-[#121417]">
      <Header />
      <div className="mt-8" />
      <section className="flex items-center justify-center w-full">
        <HeroSection />
      </section>
      <div className="mt-8" />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}