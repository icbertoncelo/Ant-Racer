import { IAnt } from "@utils/interfaces/ants";
import { AntContainer, AntData, AntName, AntStatus, AntSubtitle } from "./styles";

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
      <AntStatus color={data.status}>{data.status}</AntStatus>
    </AntContainer>
  )
}