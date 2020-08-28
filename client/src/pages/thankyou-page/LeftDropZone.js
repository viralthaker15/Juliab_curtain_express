import React, { Component } from 'react';
import SingleProductUpsell from './SingleProductUpsell';
class LeftDropZone extends Component {
  renderBlock = (settings, index) => {
    let comp = null;
    switch (settings.type) {
      case 'single-product-upsell':
        comp = <SingleProductUpsell key={index} obj={settings} />
        break;

      default:
        break;
    }
    return comp;
  }
  render() {
    const { thankyouLeft } = this.props;
    if (!thankyouLeft) {
      return null;
    }
    let settings = thankyouLeft.settings;

    if (!settings) {
      return null;
    }

    return (
      <div className='left-drop-zone'>
        {settings.map((setting, index) => {
          return this.renderBlock(setting, index);
        })}
      </div>
    );
  }
}

export default LeftDropZone;