import React from 'react';
import {Link} from "react-router-dom";

const LinkToProduct = ({children, id}) => <Link to={`/products/${id}`}>{children}</Link>;

const GridItem = ({product}) =>
    <div className="col-6 col-md-2 text-center">
        <div className="grid-item">
            <div><LinkToProduct id={product.id}><img src={product.imageUrl}/></LinkToProduct></div>
            <LinkToProduct id={product.id}>{product.name}</LinkToProduct>
            <div>{product.price} €</div>
            <button type="button" className="btn btn-primary">Add to cart</button>
        </div>
    </div>;

export {GridItem};