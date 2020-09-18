import React, { useCallback, useState } from 'react';
import './dashboard.scss';
import {
  Page,
  Layout,
  Card,
  TextField

} from "@shopify/polaris";
import { connect } from 'react-redux';
import { startSearch } from '../../redux/shopify/shopifyAction';



const Dashboard = ({ startSearch, searchedProducts }) => {
  //states
  const [products, setProducts] = useState([]);

  console.log(products);

  const TextFieldExample = (label, defValue = "") => {

    const [value, setValue] = useState(defValue);
    const handleChange = useCallback((newValue) => {
      setValue(newValue);
      let result = startSearch(newValue);
      setProducts(result);
    }, []);

    return <TextField placeholder="Add product" label={label} value={value} onChange={handleChange} />;
  }

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section oneThird></Layout.Section>
        <Layout.Section oneThird>
          <Card title="Juliab Curtain App">
            <Card.Section >
              {TextFieldExample("Product")}
              {searchedProducts.products.length > 0 && (
                <div className='searched-performed'>
                  {searchedProducts.products.map(product => {
                    return (
                      <div className='product'>
                        {product.title}
                      </div>)
                  })}
                </div>
              )}
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneThird></Layout.Section>
      </Layout>
    </Page>
  )

}

const mapDispatchToProps = dispatch => ({
  startSearch: query => dispatch(startSearch(query))
})
const mapStateToProps = state => ({
  searchedProducts: state.shopify.searchProducts
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);