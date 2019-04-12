import * as React from "react";
import styled from "styled-components";
import classnames from "classnames";

import { Page } from "./pages";

type NavbarProps = {
  pages: Page[];
  className?: string;
};

const activeCls = (clsName: string) => (active: boolean) => active ? clsName : null;
const bulmaActive = activeCls("is-active")

const Navbar = ({ className, pages }: NavbarProps) => {
    const [active, setActive] = React.useState(false);
    return (
        <div className={className}>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                {pages[0].title}
              </a>
      
              <a
                role="button"
                className={classnames("navbar-burger", "burger", bulmaActive(active))}
                aria-label="menu"
                aria-expanded={active}
                data-target="navbarBasicExample"
                onClick={() => setActive(!active)}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
      
            <div id="navbarBasicExample" className={classnames("navbar-menu", bulmaActive(active))}>
              <div className="navbar-start">
                {
                    pages.map(p => (
                      <a href={p.route.path} className="navbar-item">
                          {p.route.name}
                      </a>
                    ))
                }
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">More</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Jobs</a>
                    <a className="navbar-item">Contact</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Report an issue</a>
                  </div>
                </div>
              </div>
      
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
}




export default styled(Navbar)`
  .navbar-brand {
    font-family: "Tenor Sans", sans-serif !important;
    font-size: 1.5rem;
    background: #d70009;
    & *,
    & {
      color: white;
      &:hover {
        color: white;
      }
    }
  }
  .button.is-primary {
    background: #d70009;
  }
  nav.navbar {
    box-shadow: rgba(8, 35, 51, 0.08) 0px 2px 4px;
  }
`;
