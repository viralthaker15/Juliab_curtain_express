import React, { Component } from 'react';
import Srcset from '../../components/Srcset';
import { formatMoney,convertSettingObj } from '../../components/Helper';
import { InputBox } from '../../components/Form';

class SingleProductUpsell extends Component {
  render() {
    const { obj } = this.props;
    let { settings } = obj;
    settings = convertSettingObj(settings);
    let { product } = settings;
    if (!product) {
      product = { title: "Product Title", featured_image: "", price: 1000, compare_at_price: 2000 };
    }
    let { featured_image, title, price, compare_at_price } = product;
    let header = settings.title;

    return (
      <div className='single-product-upsell content-box app-content-box'>
        <div className='content-box__row'>
          <h3>{header}</h3>
          <Srcset src_name={featured_image} />
          <h3>
            {title ? (title) : ("Product Title")}
          </h3>
          <div className='price-section'>
            <span className='price'>{formatMoney(price)}</span>
            {compare_at_price ? (
              <span className='compare'>{formatMoney(compare_at_price)}</span>
            ) : null}
          </div>
          <div className='flex-view-xs space middle'>
            <div className='qty-box col-sm-6 col-xs-12'>
              <InputBox type='number' value="1" />
            </div>
            <div className='button-box col-sm-6 col-xs-12'>
              <button className='btn button buy-now-button'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProductUpsell;
