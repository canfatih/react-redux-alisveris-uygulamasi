import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import {Badge} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../redux/actions/cartActions";
import {Link} from "react-router-dom"

class cartSummary extends Component {
    renderEmpty(){
        return (
            <Nav.Link>Sepetiniz boş</Nav.Link>
        )
    }
    renderSummary(){
        return(
             <NavDropdown title="Sepet" id="collasible-nav-dropdown">
               {
                   this.props.cart.map(cartItem=>(
                               <NavDropdown.Item key={cartItem.product.id}>
                                 <Badge color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>Sil</Badge>
                                   {cartItem.product.productName}
                                   <Badge color="success">{cartItem.quantity}</Badge>
          </NavDropdown.Item>
                   ))
               }  
  
          <NavDropdown.Divider />
          <NavDropdown.Item><Link to ={"/cart"}>Sepete Git</Link></NavDropdown.Item>
        </NavDropdown>
        )
    }
  render() {
    return (
      <div>
          {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
       
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){

  return {
    actions:{
      removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
    }
  }
}

function mapStateToProps(state){
    return {
        cart:state.cartReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cartSummary);
