import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductGrid from './components/ProductGrid';
import { fetchProducts } from './state/product/actions';
import { fetchCart } from './state/cart/actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCart();

  }
  render() {
    const {
      isProductsLoading,
      products,
      cart,
    } = this.props;

    if(isProductsLoading) {
      return <h2>Loading...</h2>;
    }


    return (
      <div>
        <h1>Shop application</h1>
        <ProductGrid
          products={products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isProductsLoading: state.product.isLoading,
  products: state.product.products,
  cart: state.cart.cart
});

const mapDispatchToProps = {
  fetchProducts,
  fetchCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
