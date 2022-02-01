import React from "react";
import { CentralizedContainer, VeticalAligner } from "../common/common.styles";
import {
  BottomFooter,
  BottomFooterContainer,
  FooterAllItemsContainer,
  FooterItemContainer,
  FooterTextClickableContainer,
  FooterTextContainer,
} from "./footer.styles";

function BottomFooterComponent() {
  return (
    <BottomFooterContainer>
      <CentralizedContainer>
        <BottomFooter>
          <FooterAllItemsContainer>
            <FooterItemContainer>
              <FooterTextContainer style={{ marginBottom: 20, marginTop: 50 }}>
                Menu
              </FooterTextContainer>
              <FooterTextClickableContainer
                href={"https://ingresso.com/filmes"}
                target={"_blank"}
              >
                Filmes
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={"https://ingresso.com/cinemas"}
                target={"_blank"}
              >
                Cinemas
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={"https://ingresso.com/eventos"}
                target={"_blank"}
              >
                Eventos
              </FooterTextClickableContainer>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterTextContainer style={{ marginBottom: 20, marginTop: 50 }}>
                Institucional
              </FooterTextContainer>
              <FooterTextClickableContainer
                href={"https://www.ingresso.com/institucional"}
                target={"_blank"}
              >
                Quem Somos
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://www.ingresso.com/sao-paulo/eventos/institucional/assessoria-imprensa"
                }
                target={"_blank"}
              >
                Assessoria de Imprensa
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={"https://ingresso.github.io/ingresso-bootstrap/"}
                target={"_blank"}
              >
                Bootstrap Ingresso.com
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://b2b.ingresso.com/?utm_source=site&utm_medium=link&utm_campaign=footer-site-ingresso"
                }
                target={"_blank"}
              >
                Vale-Presente Corporativo
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={"https://www.ingresso.com/sao-paulo/eventos/cidades"}
                target={"_blank"}
              >
                Ingresso.com atende
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://www.movieid.com/?utm_source=site&utm_medium=link&utm_campaign=footer-site-ingresso"
                }
                target={"_blank"}
              >
                movieID.com
              </FooterTextClickableContainer>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterTextContainer style={{ marginBottom: 20, marginTop: 50 }}>
                Políticas
              </FooterTextContainer>
              <FooterTextClickableContainer
                href={
                  "https://atendimento.ingresso.com/hc/pt-br/sections/360000077411-Pol%C3%ADticas-de-Privacidade-e-Seguran%C3%A7a%7C"
                }
                target={"_blank"}
              >
                Privacidade e Segurança
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://atendimento.ingresso.com/hc/pt-br/sections/360000071011-Pol%C3%ADticas-de-Meia-Entrada"
                }
                target={"_blank"}
              >
                Meia-entrada
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://atendimento.ingresso.com/hc/pt-br/sections/360000067652-Pol%C3%ADticas-de-Troca-e-Cancelamento"
                }
                target={"_blank"}
              >
                Trocas e Cancelamentos
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://atendimento.ingresso.com/hc/pt-br/sections/360000070991-Leis-Estaduais-e-Municipais"
                }
                target={"_blank"}
              >
                Leis Estaduais e Municipais
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://atendimento.ingresso.com/hc/pt-br/sections/360000244526-Termos-de-Uso"
                }
                target={"_blank"}
              >
                Termos de Uso
              </FooterTextClickableContainer>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterTextContainer style={{ marginBottom: 20, marginTop: 50 }}>
                Dúvidas
              </FooterTextContainer>
              <FooterTextClickableContainer
                href={"https://atendimento.ingresso.com/"}
                target={"_blank"}
              >
                Atendimento
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={
                  "https://www.ingresso.com/sao-paulo/eventos/institucional/alerta-emails-sites-falsos"
                }
                target={"_blank"}
              >
                Site ou e-mails falsos
              </FooterTextClickableContainer>
              <FooterTextClickableContainer
                href={"http://www.procon.rj.gov.br/"}
                target={"_blank"}
              >
                Procon-RJ
              </FooterTextClickableContainer>
            </FooterItemContainer>
          </FooterAllItemsContainer>
        </BottomFooter>
      </CentralizedContainer>
    </BottomFooterContainer>
  );
}

export default BottomFooterComponent;
