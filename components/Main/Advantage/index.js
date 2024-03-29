import React from "react";
import { Content, Behind, News as Card } from "../shared/styles-vertical";

const news = [
  {
    source: "/static/images/yetubrand-blog-card-1.webp",
    alt: "marketing digital",
    title: "Relatório de tráfego",
    desc:
      "Saiba tudo sobre quem acessa seu site. Oferecemos um relatório detalhado de seus clientes.",
    sizes: {
      width: 14,
      height: 14,
    },
  },
  {
    source: "/static/images/yetubrand-blog-card-2.webp",
    alt: "Google Rankings",
    title: "Audiência",
    desc:
      "Os nossos serviços de links patrocinados, ajudam a tua empresa a crescer rápidamente.",
    sizes: {
      width: 14,
      height: 14,
    },
  },
  {
    source: "/static/images/yetubrand-blog-card-3.webp",
    alt: "marketing digital",
    title: "Comunicação",
    desc: "Nos comunicamos com os seus clientes sobre os seus produtos.",
    sizes: {
      width: 11,
      height: 14,
    },
  },
];

function News() {
  return (
    <Content className="advantage">
      <h1> Vantagens </h1>
      <p>
        A criação de conteúdos para os meios digitais visa agregar valor a marca
        para que ela tenha uma repercussão positiva entre seus clientes e a
        sociedade em geral sendo lembrada na hora da tomada de decisão.
      </p>
      <Behind>
        {news.map((new_item) => (
          <Card
            key={new_item.title}
            image_size={new_item.sizes}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="20"
          >
            <img src={new_item.source} alt={new_item.alt} />
            <h4> {new_item.title}</h4>
            <p> {new_item.desc}</p>
          </Card>
        ))}
      </Behind>
    </Content>
  );
}

export default News;
