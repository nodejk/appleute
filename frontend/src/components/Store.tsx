import { Action } from 'redux';
import { connect } from 'react-redux';

import React from 'react';
import { Cart } from '../models/Cart';
import { CartProduct } from '../models/CartProduct';
import { AppProps, store } from '../store';
import { Box, List, ListItem, ListItemText } from '@mui/material';

interface ReduxProps {
    cart: Cart,
    addProductToCart: (action: Action) => void,
    removeProductFromCart: (action: Action) => void,
}

interface StoreProps {

}

type Props = ReduxProps & StoreProps;

interface StoreState {
    cart: Cart;
}

class Store extends React.Component<Props, StoreState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cart: {
               products: this.props.cart.products, 
            }
        }
        
    }

    private getProductElement(product: CartProduct): JSX.Element {
        return <ListItem>
                <ListItemText
                    primary="Single-line item" />
            </ListItem>
    }
    

    render() {
        return <Box>
                <List>
                    {this.props.cart.products.map(product => {
                        return this.getProductElement(product);
                    })}
                </List>
            </Box>
    }
}

const mapStateToProps = (state: AppProps) => {
    return {
        cart: state.cartStore,
        addProductToCart: (action: Action) => store.dispatch(action),
        removeProductFromCart: (action: Action) => store.dispatch(action),
    }
}

export default connect(mapStateToProps)(Store);
