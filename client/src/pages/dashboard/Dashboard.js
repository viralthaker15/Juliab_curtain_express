import React from 'react';
import PageLoad from '../../components/PageLoad';
import './dashboard.scss';
import {
  Page,
  Layout,
  Card,
  Form,
  FormLayout,
  TextField,
  Button,
  
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
            <Card title="Welcome to rEngage">
              <Card.Section title="Login">
                <Form >
                  <FormLayout>
                    <TextField
                      label="Email"
                      type="email"
                      helpText={
                        <span>
                          We’ll use this email address to inform you on future changes to
                          Polaris.
            </span>
                      }
                    />

                    <Button submit>Submit</Button>
                  </FormLayout>
                </Form>
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