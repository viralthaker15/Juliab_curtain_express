import React from 'react';
import { SkeletonPage, Layout, Card, TextContainer, SkeletonDisplayText, SkeletonBodyText } from '@shopify/polaris';
const LoadingPageMarkup = () => (
  <SkeletonPage>
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={9} />
          </TextContainer>
        </Card>
      </Layout.Section>
    </Layout>
  </SkeletonPage>
);
export default LoadingPageMarkup;