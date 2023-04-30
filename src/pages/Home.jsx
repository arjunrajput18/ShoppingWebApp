import { Filters } from "../components/Filters";
import { CartState } from "../context/Context";
import { SingleProduct } from "../components/SingleProduct";

export const Home = () => {
  const {
    state: { products },
    productState: { sort, searchWithOutOfStock, searchByFastDelievery,  SearchValue,byRating },
  } = CartState();

  const transformProducts = () => {
    let filteredData  = [...products];
    console.log(searchWithOutOfStock, "lll");
    if (sort) {
      filteredData  = filteredData.sort((a, b) =>
        sort === "LowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!searchWithOutOfStock) {
      console.log(filteredData )
      filteredData  = filteredData.filter((product) => product.inStock);
      console.log(filteredData )
    }

    if (searchByFastDelievery) {
      filteredData  = filteredData.filter((product) => product.fastDelivery);
    }
    if(SearchValue){
      filteredData =filteredData.filter(({name})=>name.toLowerCase().includes(SearchValue.toLowerCase()))
    }
    
    if (byRating) {
      filteredData = filteredData.filter(({ ratings }) => ratings >= byRating)
    }
    return filteredData ;
  };

  // const filterData=SearchValue?products.filter(({name})=>name.toLowerCase().includes(SearchValue.toLowerCase())) :products

  console.log(products);
  return (
    <div className="container">
      <Filters />
      <div className="innerContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} />
        ))}
      </div>
    </div>
  );
};
