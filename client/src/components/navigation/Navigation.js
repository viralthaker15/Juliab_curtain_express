import React from 'react';

/* Shopify Polaris */
import { Navigation } from '@shopify/polaris';
import { withRouter } from 'react-router-dom';
import { ArrowLeftMinor, HomeMajorMonotone, OrdersMajorTwotone } from '@shopify/polaris-icons';

/* Custom imports */
import './navigation.scss';

class NavigationClass extends React.Component {

  redirectTo = url => {
    const { history } = this.props;
    history.push(url);
  }
  windowRedirectTo = url => {
   window.location.href = url;
  }
  navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: 'Back to Shopify',
            icon: ArrowLeftMinor,
            onClick: () => this.redirectTo("/test")
          },
        ]}
      />
      <Navigation.Section
        separator
        title="RE-Engage App"
        items={[
          {
            label: 'Dashboard',
            icon: HomeMajorMonotone,
            onClick: () => this.redirectTo("/")
          },
          {
            label: 'Template editor',
            icon: OrdersMajorTwotone,
            onClick: () => this.windowRedirectTo("/template-editor")
          }
        ]}

      />
    </Navigation>
  );
  render() {
    return this.navigationMarkup
  }

}
export default withRouter(NavigationClass);