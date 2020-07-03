import  React  from "react";
import LazyLoad  from 'react-lazyload';


const Loading = () => {
  return(
    <div className = "loading">
      <h5>Loading...</h5>
    </div>
  );
}


const ProductCardList = ({productArray}) => {

    return (
      
        <div className = "product-container">
          {productArray.map((product, index) => {
              return(
                <LazyLoad key = {index} placeholder={<Loading />}>
                  {product}    
                </LazyLoad> 
              ); 
          })}

        </div>
    
    );
}

export default ProductCardList;