import Inner from "../components/Inner";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minMax(0, 1fr));
  gap: 1rem;
`;

export default function TodoApp() {
  return (
    <main>
      <Inner>
        <TodoForm />
        <StyledSection>
          <TodoList isDoneState={false} />
          <TodoList isDoneState={true} />
        </StyledSection>
      </Inner>
    </main>
  );
}
