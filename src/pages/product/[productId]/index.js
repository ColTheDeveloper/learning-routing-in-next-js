import { useRouter } from "next/router"
const ProductDetails=()=>{
    const router=useRouter()
    const productId= router.query.productId
    return<h1>Product details {productId}</h1>
}
export default ProductDetails