import React from "react";
import { RiLoader2Line } from "react-icons/ri";
import LoadingContainer, { LoadingIconContainer } from "./loading.styles";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingIconContainer>
        <RiLoader2Line />
      </LoadingIconContainer>
    </LoadingContainer>
  );
}

export default Loading;
