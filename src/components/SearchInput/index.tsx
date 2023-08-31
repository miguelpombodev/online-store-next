import { Container, Input } from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchInput() {
  return (
    <Container>
      <Input placeholder="Wanna search something?" />
      <MagnifyingGlass />
    </Container>
  );
}
