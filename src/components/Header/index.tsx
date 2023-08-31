import { ProductCategories } from "../ProductCategories";
import { SearchInput } from "../SearchInput";
import { UserOrdersInfo } from "../UserOrdersInfo";
import { CategoriesContainer, Container, MainContentContainer } from "./styles";
import { Logo } from "../Logo";

export function Header() {
  return (
    <Container>
      <MainContentContainer>
        <Logo />
        <SearchInput />
        <UserOrdersInfo />
      </MainContentContainer>
      <CategoriesContainer>
        <ProductCategories
          categories={["Women", "Men", "Sports", "Kids", "Beauty", "Outlet"]}
        />
      </CategoriesContainer>
    </Container>
  );
}
