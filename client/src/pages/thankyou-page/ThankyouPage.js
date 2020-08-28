import React, { Component } from 'react';
import { connect } from 'react-redux';
import './thankyoupage-shopify.scss';
import './thankyoupage-app.scss';
import { getDataStart, setLoading } from '../../redux/thank-you/thankyouAction';
import { setWithoutIframe as HeaderSet } from '../../redux/thank-you/header/headerAction';
import { setWithoutIframe as LeftSideSet } from '../../redux/thank-you/left-section/leftSectionAction';
import { smoothScroll } from '../../components/Helper';

/* UI imports */
import Header from './HeaderDropZone';
import LeftDropZone from './LeftDropZone';

class ThankyouPage extends Component {
  componentDidMount() {
    let { HeaderSet, LeftSideSet, getDataStart, setLoading } = this.props;
    getDataStart(true);
    setLoading(true);
    window.addEventListener("message", function (event) {
      try {
        let obj = JSON.parse(event.data);
        if (obj.name === 'Header') {
          HeaderSet(obj);
        }
        if (obj.name === 'Left side') {
          LeftSideSet(obj);
        }
        if (obj.name === 'scroll') {
          smoothScroll(obj.element, obj.padding);
        }
      }
      catch (e) {

      }
    });
  }
  render() {
    let { thankyouHeader, thankyouLeft } = this.props;
    return (
      <div id='thank-you-page'>
        <div className='js mac chrome desktop page--no-banner page--logo-main page--thank-you cors svg opacity placeholder no-touchevents displaytable display-table generatedcontent cssanimations flexbox no-flexboxtweener anyflexbox shopemoji floating-labels js-focus-visible'>
          <div className="content" data-content>
            <div className="wrap">
              <div className="main">
                <Header thankyouHeader={thankyouHeader} />
                <main className="main__content" role="main">
                  <div className="step" data-step="thank_you">
                    <div className="step__sections">
                      <div className="section">
                        <div className="section__header os-header">
                          <svg className="icon-svg icon-svg--color-accent icon-svg--size-48 os-header__hanging-icon" focusable="false"> <use xlinkHref="#checkmark" /> </svg>
                          <div className="os-header__heading">
                            <span className="os-order-number">
                              Order #1004
                        </span>
                            <h2 className="os-header__title" id="main-header" tabIndex={-1}>
                              Thank you Test!
                        </h2>
                          </div>
                        </div>
                      </div>
                      <div className="thank-you__additional-content">
                        <h1>Hello 1004</h1>
                      </div>
                      <div className="section">
                        <div className="section__content">
                          <div className="content-box">
                            <div className="content-box__row content-box__row--no-padding">
                              <div className="map default-background" role="region" aria-label="Google map displaying pin point of shipping address: Oceanside, New York">
                                <iframe src="https://checkout.shopify.com/7419297907/sandbox/google_maps?locale=en" className="map__iframe" data-google-maps data-google-maps-marker="[{&quot;type&quot;:&quot;shipping&quot;,&quot;image&quot;:&quot;\/\/cdn.shopify.com\/s\/assets\/checkout\/shipping-location-pin-6eb96b6a10d2ab4d1c0d55219edd65c905343fd60d2ded24a26c03a368597405.svg&quot;,&quot;title&quot;:&quot;Shipping address&quot;,&quot;position&quot;:{&quot;lat&quot;:40.628962,&quot;lng&quot;:-73.65342100000001},&quot;marker&quot;:true,&quot;lat&quot;:40.628962,&quot;lng&quot;:-73.65342100000001,&quot;label&quot;:&quot;Oceanside, New York&quot;}]" title="Google map displaying pin point of shipping address: Oceanside, New York">
                                </iframe>
                              </div>
                            </div>
                            <div className="content-box__row text-container">
                              <h2 className="heading-2 os-step__title" id="main-header" tabIndex={-1}>Your order is confirmed</h2>
                              <div className="os-step__special-description">
                                <p className="os-step__description">
                                  You’ll receive an email when your order is ready.
                            </p>
                              </div>
                            </div>
                          </div>
                          <div className="content-box" data-order-updates="true">
                            <div className="content-box__row text-container" data-order-update-options="[&quot;arrive&quot;]">
                              <h2 className="heading-2">Order updates</h2>
                              <div className="os-step__description">
                                <div>
                                  <button className="ui-button btn btn--subdued btn--size-small shown-if-js" data-arrive-phone="true" data-aria-expanded="false" data-aria-controls="customer_notification_form--arrive" type="button" name="button">
                                    <span className="arrive-button__bold">Track order <span className="arrive-button">with Shop</span></span>
                                  </button>    <div data-arrive-rebranding-info="true" className="os-step__btn-info">
                                    <p className="small-text">formerly <svg className="icon-svg icon-svg--size-16 icon-svg--inline-before os-step__arrive-logo" focusable="false"> <use xlinkHref="#arrive-logo" /> </svg> Arrive
                                </p>
                                  </div>
                                </div>
                                <form className="new_arrive_signup_form animate-floating-labels" id="new_arrive_signup_form" data-arrive-phone-form="true" action="/7419297907/orders/80d76c6a243c6dc916a7a092476cc09e/subscriptions/create_arrive_signup" acceptCharset="UTF-8" method="post"><input type="hidden" name="authenticity_token" defaultValue="jhVouozqAcqpH4HU4ZHNKrPWHfzhnuVZtkxr1oKVVyKxY6_fnmUrXRIeoP-POgeVJ07BKUxLCktkgW-g3YuXLA" />
                                  <div data-arrive-phone-wrapper="true" className="hidden-if-js">
                                    <div className="fieldset">
                                      <div className="field--two-thirds field field--required">
                                        <div className="field__input-btn-wrapper">
                                          <div className="field__input-wrapper"><label className="field__label field__label--visible" htmlFor="arrive_signup_form_handle">Mobile phone number</label>
                                            {/* <input placeholder="Mobile phone number" autoCapitalize="off" spellCheck="false" autoComplete="phone" data-autofocus="true" data-phone-flag-input="true" data-phone-flag-input-default-country="United States" data-phone-formatter="true" data-phone-formatter-insert-country-code="true" data-phone-formatter-e164="true" data-phone-formatter-region-code="US" data-backup="subscription_handle" data-phone-flag-label="Country/Region code" data-trekkie-id-shipping-updates-handle-type="phone" className="field__input" size={30} type="tel" name id="arrive_signup_form_phone" /><div className="flag-selector flag-selector--hidden"><div className="flag-selector__icon" /><svg focusable="false"  role="presentation" className="flag-selector__caret icon-svg icon-svg--size-10"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#caret-down" /></svg><select className="flag-selector__select" data-region-code="true" autoComplete="nope" aria-label="Country/Region code"><option value="AF">Afghanistan (+93)</option><option value="AX">Aland Islands (+358)</option><option value="AL">Albania (+355)</option><option value="DZ">Algeria (+213)</option><option value="AD">Andorra (+376)</option><option value="AO">Angola (+244)</option><option value="AI">Anguilla (+1)</option><option value="AG">Antigua And Barbuda (+1)</option><option value="AR">Argentina (+54)</option><option value="AM">Armenia (+374)</option><option value="AW">Aruba (+297)</option><option value="AU">Australia (+61)</option><option value="AT">Austria (+43)</option><option value="AZ">Azerbaijan (+994)</option><option value="BS">Bahamas (+1)</option><option value="BH">Bahrain (+973)</option><option value="BD">Bangladesh (+880)</option><option value="BB">Barbados (+1)</option><option value="BY">Belarus (+375)</option><option value="BE">Belgium (+32)</option><option value="BZ">Belize (+501)</option><option value="BJ">Benin (+229)</option><option value="BM">Bermuda (+1)</option><option value="BT">Bhutan (+975)</option><option value="BO">Bolivia (+591)</option><option value="BA">Bosnia And Herzegovina (+387)</option><option value="BW">Botswana (+267)</option><option value="BR">Brazil (+55)</option><option value="IO">British Indian Ocean Territory (+246)</option><option value="BN">Brunei (+673)</option><option value="BG">Bulgaria (+359)</option><option value="BF">Burkina Faso (+226)</option><option value="BI">Burundi (+257)</option><option value="KH">Cambodia (+855)</option><option value="CA">Canada (+1)</option><option value="CV">Cape Verde (+238)</option><option value="BQ">Caribbean Netherlands (+599)</option><option value="KY">Cayman Islands (+1)</option><option value="CF">Central African Republic (+236)</option><option value="TD">Chad (+235)</option><option value="CL">Chile (+56)</option><option value="CN">China (+86)</option><option value="CX">Christmas Island (+61)</option><option value="CC">Cocos (Keeling) Islands (+61)</option><option value="CO">Colombia (+57)</option><option value="KM">Comoros (+269)</option><option value="CG">Congo (+242)</option><option value="CD">Congo, The Democratic Republic Of The (+243)</option><option value="CK">Cook Islands (+682)</option><option value="CR">Costa Rica (+506)</option><option value="HR">Croatia (+385)</option><option value="CU">Cuba (+53)</option><option value="CW">Curaçao (+599)</option><option value="CY">Cyprus (+357)</option><option value="CZ">Czech Republic (+420)</option><option value="CI">Côte d'Ivoire (+225)</option><option value="DK">Denmark (+45)</option><option value="DJ">Djibouti (+253)</option><option value="DM">Dominica (+1)</option><option value="DO">Dominican Republic (+1)</option><option value="EC">Ecuador (+593)</option><option value="EG">Egypt (+20)</option><option value="SV">El Salvador (+503)</option><option value="GQ">Equatorial Guinea (+240)</option><option value="ER">Eritrea (+291)</option><option value="EE">Estonia (+372)</option><option value="SZ">Eswatini (+268)</option><option value="ET">Ethiopia (+251)</option><option value="FK">Falkland Islands (Malvinas) (+500)</option><option value="FO">Faroe Islands (+298)</option><option value="FJ">Fiji (+679)</option><option value="FI">Finland (+358)</option><option value="FR">France (+33)</option><option value="GF">French Guiana (+594)</option><option value="PF">French Polynesia (+689)</option><option value="GA">Gabon (+241)</option><option value="GM">Gambia (+220)</option><option value="GE">Georgia (+995)</option><option value="DE">Germany (+49)</option><option value="GH">Ghana (+233)</option><option value="GI">Gibraltar (+350)</option><option value="GR">Greece (+30)</option><option value="GL">Greenland (+299)</option><option value="GD">Grenada (+1)</option><option value="GP">Guadeloupe (+590)</option><option value="GT">Guatemala (+502)</option><option value="GG">Guernsey (+44)</option><option value="GN">Guinea (+224)</option><option value="GW">Guinea Bissau (+245)</option><option value="GY">Guyana (+592)</option><option value="HT">Haiti (+509)</option><option value="VA">Holy See (Vatican City State) (+39)</option><option value="HN">Honduras (+504)</option><option value="HK">Hong Kong (+852)</option><option value="HU">Hungary (+36)</option><option value="IS">Iceland (+354)</option><option value="IN">India (+91)</option><option value="ID">Indonesia (+62)</option><option value="IR">Iran, Islamic Republic Of (+98)</option><option value="IQ">Iraq (+964)</option><option value="IE">Ireland (+353)</option><option value="IM">Isle Of Man (+44)</option><option value="IL">Israel (+972)</option><option value="IT">Italy (+39)</option><option value="JM">Jamaica (+1)</option><option value="JP">Japan (+81)</option><option value="JE">Jersey (+44)</option><option value="JO">Jordan (+962)</option><option value="KZ">Kazakhstan (+7)</option><option value="KE">Kenya (+254)</option><option value="KI">Kiribati (+686)</option><option value="KP">Korea, Democratic People's Republic Of (+850)</option><option value="XK">Kosovo (+383)</option><option value="KW">Kuwait (+965)</option><option value="KG">Kyrgyzstan (+996)</option><option value="LA">Lao People's Democratic Republic (+856)</option><option value="LV">Latvia (+371)</option><option value="LB">Lebanon (+961)</option><option value="LS">Lesotho (+266)</option><option value="LR">Liberia (+231)</option><option value="LY">Libyan Arab Jamahiriya (+218)</option><option value="LI">Liechtenstein (+423)</option><option value="LT">Lithuania (+370)</option><option value="LU">Luxembourg (+352)</option><option value="MO">Macao (+853)</option><option value="MG">Madagascar (+261)</option><option value="MW">Malawi (+265)</option><option value="MY">Malaysia (+60)</option><option value="MV">Maldives (+960)</option><option value="ML">Mali (+223)</option><option value="MT">Malta (+356)</option><option value="MQ">Martinique (+596)</option><option value="MR">Mauritania (+222)</option><option value="MU">Mauritius (+230)</option><option value="YT">Mayotte (+262)</option><option value="MX">Mexico (+52)</option><option value="MD">Moldova, Republic of (+373)</option><option value="MC">Monaco (+377)</option><option value="MN">Mongolia (+976)</option><option value="ME">Montenegro (+382)</option><option value="MS">Montserrat (+1)</option><option value="MA">Morocco (+212)</option><option value="MZ">Mozambique (+258)</option><option value="MM">Myanmar (+95)</option><option value="NA">Namibia (+264)</option><option value="NR">Nauru (+674)</option><option value="NP">Nepal (+977)</option><option value="NL">Netherlands (+31)</option><option value="NC">New Caledonia (+687)</option><option value="NZ">New Zealand (+64)</option><option value="NI">Nicaragua (+505)</option><option value="NE">Niger (+227)</option><option value="NG">Nigeria (+234)</option><option value="NU">Niue (+683)</option><option value="NF">Norfolk Island (+672)</option><option value="MK">North Macedonia (+389)</option><option value="NO">Norway (+47)</option><option value="OM">Oman (+968)</option><option value="PK">Pakistan (+92)</option><option value="PS">Palestinian Territory, Occupied (+970)</option><option value="PA">Panama (+507)</option><option value="PG">Papua New Guinea (+675)</option><option value="PY">Paraguay (+595)</option><option value="PE">Peru (+51)</option><option value="PH">Philippines (+63)</option><option value="PL">Poland (+48)</option><option value="PT">Portugal (+351)</option><option value="QA">Qatar (+974)</option><option value="CM">Republic of Cameroon (+237)</option><option value="RE">Reunion (+262)</option><option value="RO">Romania (+40)</option><option value="RU">Russia (+7)</option><option value="RW">Rwanda (+250)</option><option value="BL">Saint Barthélemy (+590)</option><option value="SH">Saint Helena (+290)</option><option value="KN">Saint Kitts And Nevis (+1)</option><option value="LC">Saint Lucia (+1)</option><option value="MF">Saint Martin (+590)</option><option value="PM">Saint Pierre And Miquelon (+508)</option><option value="WS">Samoa (+685)</option><option value="SM">San Marino (+378)</option><option value="ST">Sao Tome And Principe (+239)</option><option value="SA">Saudi Arabia (+966)</option><option value="SN">Senegal (+221)</option><option value="RS">Serbia (+381)</option><option value="SC">Seychelles (+248)</option><option value="SL">Sierra Leone (+232)</option><option value="SG">Singapore (+65)</option><option value="SX">Sint Maarten (+1)</option><option value="SK">Slovakia (+421)</option><option value="SI">Slovenia (+386)</option><option value="SB">Solomon Islands (+677)</option><option value="SO">Somalia (+252)</option><option value="ZA">South Africa (+27)</option><option value="KR">South Korea (+82)</option><option value="SS">South Sudan (+211)</option><option value="ES">Spain (+34)</option><option value="LK">Sri Lanka (+94)</option><option value="VC">St. Vincent (+1)</option><option value="SD">Sudan (+249)</option><option value="SR">Suriname (+597)</option><option value="SJ">Svalbard And Jan Mayen (+47)</option><option value="SE">Sweden (+46)</option><option value="CH">Switzerland (+41)</option><option value="SY">Syria (+963)</option><option value="TW">Taiwan (+886)</option><option value="TJ">Tajikistan (+992)</option><option value="TZ">Tanzania, United Republic Of (+255)</option><option value="TH">Thailand (+66)</option><option value="TL">Timor Leste (+670)</option><option value="TG">Togo (+228)</option><option value="TK">Tokelau (+690)</option><option value="TO">Tonga (+676)</option><option value="TT">Trinidad and Tobago (+1)</option><option value="TN">Tunisia (+216)</option><option value="TR">Turkey (+90)</option><option value="TM">Turkmenistan (+993)</option><option value="TC">Turks and Caicos Islands (+1)</option><option value="TV">Tuvalu (+688)</option><option value="UG">Uganda (+256)</option><option value="UA">Ukraine (+380)</option><option value="AE">United Arab Emirates (+971)</option><option value="GB">United Kingdom (+44)</option><option value="US">United States (+1)</option><option value="UY">Uruguay (+598)</option><option value="UZ">Uzbekistan (+998)</option><option value="VU">Vanuatu (+678)</option><option value="VE">Venezuela (+58)</option><option value="VN">Vietnam (+84)</option><option value="VG">Virgin Islands, British (+1)</option><option value="WF">Wallis And Futuna (+681)</option><option value="EH">Western Sahara (+212)</option><option value="YE">Yemen (+967)</option><option value="ZM">Zambia (+260)</option><option value="ZW">Zimbabwe (+263)</option></select></div><input type="hidden" name="arrive_signup_form[phone]" /> */}
                                          </div>
                                          <button type="submit" className="field__input-btn btn">
                                            <span className="btn__content visually-hidden-on-mobile">Submit</span>
                                            <svg className="icon-svg icon-svg--size-16 btn__icon shown-on-mobile" focusable="false"> <use xlinkHref="#arrow" /> </svg>
                                            <svg className="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" focusable="false"> <use xlinkHref="#spinner-button" /> </svg>
                                          </button>
                                        </div>
                                        <div className="arrive-phone-description">
                                          You'll receive a text with a link to the Shop app to help track your order.
                                    </div>
                                      </div>        <input defaultValue="US" size={30} type="hidden" name="arrive_signup_form[country_code]" id="arrive_signup_form_country_code" />
                                    </div>
                                  </div>
                                  <input type="hidden" name="checkout[client_details][browser_width]" defaultValue={1425} /><input type="hidden" name="checkout[client_details][browser_height]" defaultValue={683} /><input type="hidden" name="checkout[client_details][javascript_enabled]" defaultValue={1} /><input type="hidden" name="checkout[client_details][color_depth]" defaultValue={24} /><input type="hidden" name="checkout[client_details][java_enabled]" defaultValue="false" /><input type="hidden" name="checkout[client_details][browser_tz]" defaultValue={-330} /></form></div>
                            </div>
                          </div>
                          <div className="content-box">
                            <div className="content-box__row content-box__row--no-border">
                              <h2>Customer information</h2>
                            </div>
                            <div className="content-box__row">
                              <div className="section__content">
                                <div className="section__content__column section__content__column--half">
                                  <div className="text-container">
                                    <h3 className="heading-3">Contact information</h3>
                                    <p>prakash@lucentinnovation.com</p>
                                    <h3 className="heading-3">Shipping address</h3>
                                    <address className="address">Test Prakash<br />3345. Royal Avenue<br />Oceanside NY 11572<br />United States</address>
                                    <h3 className="heading-3">Shipping method</h3>
                                    <p>International Shipping</p>
                                  </div>
                                </div>
                                <div className="section__content__column section__content__column--half">
                                  <div className="text-container">
                                    <h3 className="heading-3">Payment method</h3>
                                    <ul className="payment-method-list">
                                      <li className="payment-method-list__item">
                                        <span className="payment-method-list__item__info">Cash on Delivery (COD)</span>
                                        <span className="payment-method-list__item__amount emphasis"> - ₹ 1,020.00</span>
                                      </li>
                                    </ul>
                                    <h3 className="heading-3">Billing address</h3>
                                    <address className="address">Test Prakash<br />3345. Royal Avenue<br />Oceanside NY 11572<br />United States</address>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <LeftDropZone thankyouLeft={thankyouLeft} />
                    <div className="step__footer">
                      <a href="https://prakash-theme.myshopify.com/" className="step__footer__continue-btn btn">
                        <span className="btn__content">Continue shopping</span>
                        <svg className="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" focusable="false"> <use xlinkHref="#spinner-button" /> </svg>
                      </a>
                      <p className="step__footer__info">
                        Need help? <a data-tekkie-id="contact_us_link" href="mailto:prakash@lucentinnovation.com">Contact us</a>
                      </p>
                    </div>
                  </div>
                  <div className="hidden">
                    <span className="visually-hidden" id="forwarding-external-new-window-message">
                      Opens external website in a new window.
                </span>
                    <span className="visually-hidden" id="forwarding-new-window-message">
                      Opens in a new window.
                </span>
                    <span className="visually-hidden" id="forwarding-external-message">
                      Opens external website.
                </span>
                    <span className="visually-hidden" id="checkout-context-step-one">
                      Customer information - prakash-theme - Checkout
                </span>
                  </div>
                </main>
                <footer className="main__footer" role="contentinfo">
                  <p className="copyright-text">
                    All rights reserved prakash-theme
              </p>
                </footer>
              </div>
              <aside className="sidebar" >
                <div className="sidebar__header">
                  <a className="logo logo--left" href="https://prakash-theme.myshopify.com/"><span className="logo__text heading-1">prakash-theme</span></a>
                  <h1 className="visually-hidden">
                    Thank you for your purchase!
              </h1>
                </div>
                <div className="sidebar__content">
                  <div className="order-summary order-summary--is-collapsed" data-order-summary>
                    <h2 className="visually-hidden">Order summary</h2>
                    <div className="order-summary__sections">
                      <div className="order-summary__section order-summary__section--product-list">
                        <div className="order-summary__section__content">
                          <table className="product-table">
                            <caption className="visually-hidden">Shopping cart</caption>
                            <thead className="product-table__header">
                              <tr>
                                <th scope="col"><span className="visually-hidden">Product image</span></th>
                                <th scope="col"><span className="visually-hidden">Description</span></th>
                                <th scope="col"><span className="visually-hidden">Quantity</span></th>
                                <th scope="col"><span className="visually-hidden">Price</span></th>
                              </tr>
                            </thead>
                            <tbody data-order-summary-section="line-items">
                              <tr className="product" data-product-id={1514107994227} data-variant-id={15086433763443} data-product-type="Womens - Tank Tops & Camis" data-customer-ready-visible>
                                <td className="product__image">
                                  <div className="product-thumbnail ">
                                    <div className="product-thumbnail__wrapper">
                                      <img alt="Rose Heather" className="product-thumbnail__image" src="//cdn.shopify.com/s/files/1/0074/1929/7907/products/2833-roseheather-1_small.jpg?v=1535230384" />
                                    </div>
                                    <span className="product-thumbnail__quantity" >1</span>
                                  </div>
                                </td>
                                <th className="product__description" scope="row">
                                  <span className="product__description__name order-summary__emphasis">Airy Melange Burnout Tank</span>
                                  <span className="product__description__variant order-summary__small-text">Rose Heather / S</span>
                                </th>
                                <td className="product__quantity visually-hidden">
                                  1
                            </td>
                                <td className="product__price">
                                  <span className="order-summary__emphasis skeleton-while-loading">₹ 1,000.00</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="order-summary__scroll-indicator" tabIndex={-1}>
                            Scroll for more items
                        <svg focusable="false" className="icon-svg icon-svg--size-12"> <use xlinkHref="#down-arrow" /> </svg>
                          </div>
                        </div>
                      </div>
                      <div className="order-summary__section order-summary__section--total-lines" data-order-summary-section="payment-lines">
                        <table className="total-line-table">
                          <caption className="visually-hidden">Cost summary</caption>
                          <thead>
                            <tr>
                              <th scope="col"><span className="visually-hidden">Description</span></th>
                              <th scope="col"><span className="visually-hidden">Price</span></th>
                            </tr>
                          </thead>
                          <tbody className="total-line-table__tbody">
                            <tr className="total-line total-line--subtotal">
                              <th className="total-line__name" scope="row">Subtotal</th>
                              <td className="total-line__price">
                                <span className="order-summary__emphasis skeleton-while-loading" data-checkout-subtotal-price-target={100000}>
                                  ₹ 1,000.00
                            </span>
                              </td>
                            </tr>
                            <tr className="total-line total-line--shipping">
                              <th className="total-line__name" scope="row">
                                <span>
                                  Shipping
                            </span>
                              </th>
                              <td className="total-line__price">
                                <span className="skeleton-while-loading order-summary__emphasis" data-checkout-total-shipping-target={2000}>
                                  ₹ 20.00
                            </span>
                              </td>
                            </tr>
                            <tr className="total-line total-line--duties">
                              <th className="total-line__name" scope="row">
                                Duties and taxes
                            <div className="total-line__duties-container has-tooltip" id="duties-tooltip">
                                  <svg focusable="false" className="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-14"> <use xlinkHref="#question" /> </svg>
                                  <span className="tooltip tooltip--right-align">This order is being shipped from another country, so duties and taxes may be charged on delivery.</span>
                                </div>
                              </th>
                              <td className="total-line__price">
                                <span className="order-summary__small-text">
                                  May be charged on delivery
                            </span>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot className="total-line-table__footer">
                            <tr className="total-line">
                              <th className="total-line__name payment-due-label" scope="row">
                                <span className="payment-due-label__total">Total</span>
                              </th>
                              <td className="total-line__price payment-due" data-presentment-currency="INR">
                                <span className="payment-due__price skeleton-while-loading--lg" data-checkout-payment-due-target={102000}>
                                  ₹ 1,020.00
                            </span>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="partial-icon-symbols" className="icon-symbols" data-tg-refresh="partial-icon-symbols" data-tg-refresh-always="true"><svg xmlns="http://www.w3.org/2000/svg"><symbol id="down-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path d="M10.817 7.624l-4.375 4.2c-.245.235-.64.235-.884 0l-4.375-4.2c-.244-.234-.244-.614 0-.848.245-.235.64-.235.884 0L5.375 9.95V.6c0-.332.28-.6.625-.6s.625.268.625.6v9.35l3.308-3.174c.122-.117.282-.176.442-.176.16 0 .32.06.442.176.244.234.244.614 0 .848" /></svg></symbol>
                    <symbol id="question"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.7 13H6.8v-2h1.9v2zm2.6-7.1c0 1.8-1.3 2.6-2.8 2.8l-.1 1.1H7.3L7 7.5l.1-.1c1.8-.1 2.6-.6 2.6-1.6 0-.8-.6-1.3-1.6-1.3-.9 0-1.6.4-2.3 1.1L4.7 4.5c.8-.9 1.9-1.6 3.4-1.6 1.9.1 3.2 1.2 3.2 3z" /></svg></symbol>
                    <symbol id="checkmark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" strokeWidth={2} className="checkmark"><path className="checkmark__circle" d="M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z" /><path className="checkmark__check" d="M15 24.51l7.307 7.308L35.125 19" /></svg></symbol>
                    <symbol id="arrive-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.701 62.896"><g><path fill="#5157FF" d="M66.164 56.424L36.93 2.194C36.19.82 34.85 0 33.35 0s-2.838.82-3.58 2.193L.538 56.423c-.752 1.395-.712 3.103.1 4.46.76 1.26 2.058 2.013 3.478 2.013h7.628c1.478 0 2.85-.84 3.58-2.193l1.34-2.486 14.61-28.102c.384-.713 1.06-1.14 1.81-1.14s1.426.427 1.797 1.113l6.19 12.38h-4.69c.105.32.16.66.16 1.012 0 .345-.052.676-.15.988H44.32l-7.66-15.3c-.74-1.372-2.078-2.192-3.58-2.192-1.5 0-2.838.82-3.586 2.206L14.888 57.284l-1.333 2.473c-.38.703-1.073 1.14-1.81 1.14h-7.63c-.717 0-1.356-.38-1.753-1.042-.454-.756-.475-1.708-.056-2.485L31.54 3.14C31.924 2.425 32.6 2 33.35 2s1.427.426 1.81 1.14l29.235 54.23c.42.776.397 1.728-.057 2.484-.397.66-1.036 1.04-1.754 1.04h-8.16c-.738 0-1.432-.436-1.812-1.138l-1.96-3.638c-.467.474-1.08.808-1.777.932l1.97 3.652c.728 1.353 2.1 2.193 3.578 2.193h8.16c1.42 0 2.72-.753 3.478-2.014.816-1.355.855-3.063.104-4.456z" /><ellipse fill="#5157FF" cx="33.236" cy="43.479" rx="3.306" ry="3.294" /><ellipse transform="rotate(-6.28 48.295 53.81)" fill="#00E4B2" cx="48.293" cy="53.812" rx="3.307" ry="3.294" /></g></svg></symbol>
                    <symbol id="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z" /></svg></symbol>
                    <symbol id="spinner-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z" /></svg></symbol>
                    <symbol id="caret-down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M0 3h10L5 8" fillRule="nonzero" /></svg></symbol></svg></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => (
  {
    HeaderSet: item => dispatch(HeaderSet(item)),
    LeftSideSet: item => dispatch(LeftSideSet(item)),
    getDataStart: item => dispatch(getDataStart(item)),
    setLoading: item => dispatch(setLoading(item)),
  }
)
const mapStateToProps = state => (
  {
    thankyouHeader: state.thankyouHeader,
    thankyouLeft: state.thankyouLeft
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(ThankyouPage);;
