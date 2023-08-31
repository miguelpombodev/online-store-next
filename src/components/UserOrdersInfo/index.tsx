import { Container, UserContainerIcon, UserNameGreeting } from "./styles";
import { User, ShoppingCart, Heart, CaretDown } from "@phosphor-icons/react";
// import { useAuth } from "../../context/AuthContext";

export function UserOrdersInfo() {
  // const { authenticated } = useAuth();
  // to={authenticated ? "/profile" : "/login"}
  return (
    <Container>
      <UserContainerIcon href="#">
        <User size={25} />
        <UserNameGreeting>Hello Teste</UserNameGreeting>
        <CaretDown size={13} />
      </UserContainerIcon>
      <ShoppingCart size={25} />
      <Heart size={25} />
    </Container>
  );
}
