import React from "react";
import { Page } from "./index";
import { Helmet } from "react-helmet";
import styled from "styled-components";

type FAQProps = {
    question: string;
    answer: string;
}

const FAQ = ({question, answer }: FAQProps) => (
    <article className="message">
        <div className="message-header">
            <p>{question}</p>
        </div>
        <div className="message-body" dangerouslySetInnerHTML={{__html: answer}} />
        </article>
)

type FAQPageProps = {
  page: Page;
  content: Page["faqContent"];
  className?: string;
};

const FAQPage = ({ page, content, className }: FAQPageProps) => (
  <div className={className}>
    <Helmet>
      <title>
        {page.title} | {page.subtitle}
      </title>
    </Helmet>
    <section className="section">
      <div className="container">
        <h1 className="title">{page.subtitle}</h1>
        {content.faqs.map(f => (
            <FAQ question={f.title.toString()} answer={f.body.toString()} />
        ))}
      </div>
    </section>
    
  </div>
);

export default styled(FAQPage)``;
