import React from 'react';
import {
  Page,
  Layout,
  Card,

} from "@shopify/polaris";
class Login extends React.Component {
 
  render() {
  
    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section oneThird></Layout.Section>
          <Layout.Section oneThird>
            <Card title="Juliab Curtain App">
              <Card.Section title="Login">
                <a href={process.env.REACT_APP_SERVER_DOMAIN}>Click her to login</a>
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird></Layout.Section>
        </Layout>
      </Page>
    )

  }
}
export default Login;