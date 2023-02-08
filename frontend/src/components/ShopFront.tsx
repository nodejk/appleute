import { Action } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { Cart } from '../models/Cart';
import { CartProduct } from '../models/CartProduct';
import { AppProps, store } from '../store';
import { Backdrop, Box, Button, Fade, List, ListItem, ListItemText, Modal, Typography } from '@mui/material';
import { Shop } from '../models/Shop';
import { Product } from '../models/Product';
import Api from '../services';
import * as ActionTypes from '../store/actions';
import { style } from '../style/shopFront';
import { preProcessFile } from 'typescript';
import { v4 as uuid } from 'uuid';

interface ReduxProps {
    shop: Shop,
    cart: Cart,
    setAllProducts: (action: Action) => void,
    addToCart: (action: Action) => void,
    removeFromCart: (action: Action) => void,
}

interface ShopFrontProps {

}

type Props = ReduxProps & ShopFrontProps;

interface ShopState {
    cart: Cart;
    popupModal: boolean;
}

class ShopFront extends React.Component<Props, ShopState> {
    constructor(props: Props) {
        super(props);
        this.state = {popupModal: false, cart: this.props.cart};
        
        this.addToCart = this.addToCart.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    private getProductElement(product: Product): JSX.Element {
        return <ListItem id={product.id}>
                <ListItemText
                    primary={product.name}/>
                <Button variant="outlined" onClick={() => this.addToCart(product)}>Add To Cart</Button>
                <Button variant="outlined" color="error" onClick={() => this.removeFromCart(product)}>Remove</Button>
            </ListItem>
    }

    componentDidMount(): void {
        Api.Shop.getAllProducts().then(response => {
            const products: Product[] = response;
            this.props.setAllProducts(ActionTypes.setAllProducts(products));
        });
    }

    componentWillReceiveProps(props: Props): ShopState{
        return {...this.state, cart: props.cart}
    } 

    private placeOrder(): void {
        Api.Cart.order(this.props.cart).then(response => {
            console.log(response);
        })
    }
    
    private addToCart(product: Product): void {
        this.props.addToCart(ActionTypes.addProductToCart(product));
        console.log(this.props.cart);
        Api.Cart.addProduct(product).then(response => {
        })
    }

    private removeFromCart(product: Product): void {
        this.props.removeFromCart(ActionTypes.removeProductFromCart(product));
    }

    private handleOpen(): void {
        this.setState({
            popupModal: true,
        })
    }

    private handleClose(): void {
        this.setState({
            popupModal: false,
        })
    }

    private getCartElement(cartProduct: CartProduct): JSX.Element {
        return <ListItem id={uuid()}>
                <ListItemText
                    primary={cartProduct.product.name}/>
                <Typography>{cartProduct.quantity}</Typography>
            </ListItem>
    }

    render() {
        console.log(this.props.cart);
        return <Box>
                <Button onClick={this.handleOpen}>Open Cart</Button>
                    <Modal
                        id={uuid()}
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={this.state.popupModal}
                        onClose={this.handleClose}
                        closeAfterTransition>
                        <Fade in={this.state.popupModal}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                            Cart
                            </Typography>
                            {this.props.cart.products.map(cartProduct => {
                                return this.getCartElement(cartProduct);
                            })}
                            <Button onClick={() => this.placeOrder()}>Place Order</Button>
                        </Box>
                        </Fade>
                    </Modal>
                    <List>
                    {this.props.shop.products.map(product => {
                        return this.getProductElement(product);
                    })}
                </List>

            </Box>
    }
}

const mapStateToProps = (state: AppProps) => {
    return {
        shop: state.shopStore,
        cart: state.cartStore,
        setAllProducts: (action: Action) => store.dispatch(action),
        addToCart: (action: Action) => store.dispatch(action),
        removeFromCart: (action: Action) => store.dispatch(action),
    }
}

export default connect(mapStateToProps)(ShopFront);
