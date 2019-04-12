import React from 'react';
import { Page } from "./index";
import { Helmet } from "react-helmet";
import styled from "styled-components"
import { ShadowPropTypesIOS } from 'react-native';

type HomeProps = {
    page: Page;
    content: Page["homeContent"],
    className?: string;
}

const Home = ({ page, content, className }: HomeProps) => (
    <div className={className}>
        <Helmet>
            <title>{page.title} | {page.subtitle }</title>
        </Helmet>
        <section className="hero is-link is-fullheight-with-navbar hero-image">
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        {page.subtitle}
                    </p>
                </div>
            </div>
        </section>
    </div>
);

export default styled(Home)`
    .hero.is-link.hero-image {
        background: ${props => `url('${props.content.hero}') center center;`};
        background-size:cover;
    }
    .hero-body {
        background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
    }
    .title {
        max-width: 700px;
    }

`;
