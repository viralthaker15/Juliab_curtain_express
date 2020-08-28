import React, { Component } from "react";
import "./header.scss";
class Header extends Component {
  render() {
      let { thankyouHeader } = this.props;
      if(!thankyouHeader){
        return null;
      }
      let settings = thankyouHeader.settings;

      if(!settings){
        return null;
      }
      let logo = settings[0].value;
      let logo_text = settings[1].value;
      let logo_text_color = settings[2].value;
      let logo_alignment = settings[3].value;
      let linkColor = settings[5].value;
      let links = settings[6].value;
    return (
      <header className={`main__header ${logo_alignment}`} role="banner">
        <a
          className="logo logo--left"
          href="https://prakash-theme.myshopify.com/"
        >
          <span className="logo__text heading-1">
            <img src={logo} alt={logo_text} width="100"></img>
          </span>
        </a>
        <a
          className="logo logo--left"
          href="https://prakash-theme.myshopify.com/"
        >
          <span
            className="logo__text heading-1"
            style={{ color: logo_text_color }}
          >
            {logo_text}
          </span>
        </a>
        <h1 className="visually-hidden">Thank you for your purchase!</h1>

        {links ? (
          <div className="custom-nav">
            {links.map((link) => {
              return (
                <a key={link.settings[0].value} href={link.settings[1].value} style={{ "color": linkColor }}>
                  {link.settings[0].value}
                </a>
              );
            })}
          </div>
        ) : null}
      </header>
    );
  }
}

export default Header;
