"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../global/container";

const faq = [
  {
    question: "Quais os tipos de documentos que o XML LOADER recebe?",
    answer: (
      <>
        <p>
          Notas Mercantil, Operações de Terceiros, Notas de Transferências, Beneficiamento Externo e Interno, Devoluções parcial e total, Notas Complementares, Notas de Rateio (Fretes) e Notas de Serviços.
        </p>
      </>
    ),
  },
  {
    question: "Onde são armazenados os arquivos xml?",
    answer: (
      <>
        <p>
          Os arquivos podem ser armazenados em pastas lógicas na rede ou em banco de dados específico.
        </p>
      </>
    ),
  },
  {
    question: "Como é o licenciamento do XML Loader? Ele é tarifado por tipo de documento e sua quantidade?",
    answer: (
      <>
        <p>
          O XML Loader não bilheta os XMLs, ou seja, não cobra por documentos lançados. Assim, independente do volume de xmls recebidos pela empresa, o valor é o mesmo. Além disso, não há cobrança diferenciada para os diversos tipos de documentos eletrônicos, NF-e, CT-e e NFS-e.
        </p>
      </>
    ),
  },
  {
    question: "Quais os municípios que o XML LOADER recebe NFS-e?",
    answer: (
      <>
        <p>
          O XML Loader recebe notas para qualquer município que utiliza o padrão ABRASF ou GINFES. Para municípios que não utilizam esse layout, poderá ser desenvolvido de forma específica. Para os municípios de São Paulo e RJ, é possível efetuar o download diretamente dos webservices da prefeitura, eliminando a necessidade de envio pelos fornecedores.
        </p>
      </>
    ),
  },
];

const Questions = () => (
  <div id="faq" className="relative flex flex-col items-center justify-center w-full py-20">
    <Container className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-heading font-medium !leading-snug">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground mt-4">
          Tire suas dúvidas sobre o XML Loader.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {faq.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="!no-underline hover:!no-underline">{item.question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </div>
);

export default Questions;
