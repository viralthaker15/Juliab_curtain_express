import React, { useRef } from "react";
import { AppProvider, Frame, Toast, Navigation } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { hideToaster } from "./redux/main-app/mainAppAction";
import { connect } from "react-redux";
import { FormsMajorMonotone, ProductsMajorMonotone } from '@shopify/polaris-icons';

const AppContainer = (props) => {
  const { appMainData, hideToasterAction } = props;
  const skipToContentRef = useRef(null);

  const toastMarkup = appMainData.toaster ? (
    <Toast
      onDismiss={() => hideToasterAction()}
      content={appMainData.toasterMsg}
    />
  ) : null;
  const pageMarkup = props.children;

  if (props.blankTemplate) {
    return props.children;
  }

  const navigationMarkup = (
    <Navigation location='/'>
      <Navigation.Section items={[
        {
          url:"/form",
          label: 'Curtain data',
          icon: FormsMajorMonotone,
          contextControl: true
        },
      {
        url: '/products',
          label: 'Products',
          icon: ProductsMajorMonotone
        }
      ]} />
    </Navigation>
  );


  return (
    <div style={{ height: "500px" }}>
      <AppProvider i18n={enTranslations}>
        <Frame skipToContentTarget={skipToContentRef.current} navigation={navigationMarkup}>

          {pageMarkup}
          {toastMarkup}
        </Frame>
      </AppProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appMainData: state.appMain,
});
const mapDispatchToPrps = (dispatch) => ({
  hideToasterAction: () => dispatch(hideToaster()),
});
export default connect(mapStateToProps, mapDispatchToPrps)(AppContainer);
