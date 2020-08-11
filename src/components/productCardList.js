import  React  from "react";
import LazyLoad  from 'react-lazyload';


const Loading = () => {
  return(
    <div className = "loading">
      <p style = {{textAlign: "center"}}>Loading...</p>
    </div>
  );
}


const ProductCardList = ({productArray}) => {
  if(productArray.length === 0){
    return (
      <p style = {{textAlign: "center"}}>No products found. Clear the filters or change categories.</p>
    )
  }else{
    return (
      
        <ul style = {{padding:0}}className = "product-container">
          {productArray.map((product, index) => {
              return(
                <LazyLoad key = {index} placeholder={<Loading />}>
                  {product}    
                </LazyLoad> 
              ); 
          })}

        </ul>
    
    );
  }
}

export default ProductCardList;