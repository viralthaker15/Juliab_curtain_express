import React from 'react';
import './dashboard.scss';
import {
  Page,
  Layout,
  Card,

} from "@shopify/polaris";
class Dashboard extends React.Component {

  render() {
    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section oneThird></Layout.Section>
          <Layout.Section oneThird>
            <Card title="Juliab Curtain App">
              <Card.Section title="DASHBOARD">

              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird></Layout.Section>
        </Layout>
      </Page>
    )

  }
}
export default Dashboard;