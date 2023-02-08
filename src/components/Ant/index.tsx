import { IAnt } from "@utils/interfaces/ants";
import { AntContainer, AntData, AntName, AntSubtitle } from "./styles";

interface IAntProps {
  data: IAnt
}

export function Ant({ data }: IAntProps) {
  return (
    <AntContainer>
      <AntName>{data.name}</AntName>
      <AntData>
        <AntSubtitle>Length: {data.length}</AntSubtitle>
        <AntSubtitle>weight: {data.weight}</AntSubtitle>
      </AntData>
    </AntContainer>
  )
}