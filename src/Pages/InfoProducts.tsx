import { useSelector } from "react-redux";
import { Header } from "../components/header/header"
import { GlobalStyles } from "../styles/GlobalStyles";
import { useParams } from "react-router";
import { RootReducer } from "../redux/root-reducer";
import { ProductInfoCard } from "../components/ProductInfoCard/ProductInfoCard";

function InfoProducts() {

    const { id } = useParams();

    console.log("ID: ", id)

    const productsData = useSelector((state: RootReducer) => state.productsSilce.products)

    console.log("IDProduct: ", productsData);
    
    const product = productsData.find((product) => product.id.toString() == id);
    
    if(!product) {
        return <h1>Produto não encontrado</h1>
    }

    return (
        <div>
            <Header/>
            <ProductInfoCard product={product}/>
            <GlobalStyles/>
        </div>
    )
}

export default InfoProducts;