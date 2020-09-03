import React from 'react';
import PageLoad from '../../components/PageLoad';
import './dashboard.scss';
import {
  Page,
  Layout,
  Card,
  
} from "@shopify/polaris";

class Dashboard extends React.Component {
  state = {
    apiResponse: false
  }
  callAPI() {
    fetch("/api/create-meta-field")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    let { apiResponse } = this.state;
    if (!apiResponse) {
      return <PageLoad />
    }
    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section oneThird></Layout.Section>
          <Layout.Section oneThird>
            <Card title="Juliab Curtain App">
              <Card.Section title="Login">
               <a href='https://b21fdb51b01d.ngrok.io/'>Click her to login</a>
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