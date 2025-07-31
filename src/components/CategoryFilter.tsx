import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onCategoryChange(null)}
        className={
          selectedCategory === null
            ? "bg-gradient-primary hover:shadow-glow"
            : "hover:bg-muted"
        }
      >
        Todos
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category
              ? "bg-gradient-primary hover:shadow-glow"
              : "hover:bg-muted"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  );
}