import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT=[
  {
    id:"p1",
    title:"First-Book",
    price:4,
    description:"My first book"
  },
  {
    id:"p2",
    title:"Second-Book",
    price:7,
    description:"My Second book"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       { DUMMY_PRODUCT.map((item)=>(
          <ProductItem
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          id={item.id}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
