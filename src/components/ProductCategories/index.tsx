import { CategoriesNav, CategoryItem } from "./styles";

interface CategoriesProps {
  categories: string[];
}
export function ProductCategories({ categories }: CategoriesProps) {
  return (
    <CategoriesNav>
      {categories.map((category, idx) => (
        <CategoryItem key={idx}>{category}</CategoryItem>
      ))}
    </CategoriesNav>
  );
}
