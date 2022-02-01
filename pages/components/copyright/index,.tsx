import React from "react";
import { CentralizedContainer } from "../common/common.styles";
import Copyright, {
  CopyrightClickableText,
  CopyrightDataContainer,
  CopyrightText,
  CopyrightTextContainer,
} from "./copyright.styles";

function CopyrightComponent() {
  return (
    <Copyright>
      <CentralizedContainer>
        <CopyrightDataContainer>
          <CopyrightTextContainer>
            <CopyrightText>
              Ingresso.com Ltda / CNPJ: 00.860.640/0001-71
            </CopyrightText>
            <CopyrightText>
              Endereço: Rua da Quitanda, 86 - 9º andar - Centro - RJ - 20091-005
            </CopyrightText>
          </CopyrightTextContainer>
          <CopyrightTextContainer>
            <CopyrightClickableText
              href={"https://atendimento.ingresso.com/hc/pt-br"}
              target={"_blank"}
            >
              Atendimento ao cliente
            </CopyrightClickableText>
            <CopyrightText>
              © 2022 - Copyright Ingresso.com - todos os direitos reservados
            </CopyrightText>
          </CopyrightTextContainer>
        </CopyrightDataContainer>
      </CentralizedContainer>
    </Copyright>
  );
}

export default CopyrightComponent;
