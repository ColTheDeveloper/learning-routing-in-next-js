import { useRouter } from "next/router"
const Review=()=>{
    const router=useRouter()
    const {reviewId,productId}=router.query
    return<h1>Review {reviewId} from product {productId}</h1>
}
export default Review;