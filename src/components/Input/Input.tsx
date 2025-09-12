import { Wrapper } from "./style"



export default function Input({
  textLabel = "Nome",
  placeholder = "Nome completo",
}:{
  textLabel: string;
  placeholder: string;
}) {
  return (
    <Wrapper>
      <label>{textLabel}</label>
      <input type="text" id="name" name="nome" placeholder={placeholder} />
    </Wrapper>
  );
}
