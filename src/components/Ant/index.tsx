import { IAnt } from "@utils/interfaces/ants";
import { AntColor, AntContainer, AntData, AntHeader, AntName, AntStatus, AntSubtitle } from "./styles";

interface IAntProps {
  data: IAnt
}

export function Ant({ data }: IAntProps) {
  return (
    <AntContainer>
      <AntHeader>
        <AntName>{data.name}</AntName>
        <AntColor color={data.color}/>
      </AntHeader>
      <AntData>
        <AntSubtitle>Length: {data.length}</AntSubtitle>
        <AntSubtitle>weight: {data.weight}</AntSubtitle>
      </AntData>
      <AntStatus color={data.status}>{data.status}</AntStatus>
    </AntContainer>
  )
}