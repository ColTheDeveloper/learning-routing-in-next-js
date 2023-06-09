import Link from "next/link";
import { useRouter } from "next/router";
const  Home=()=>{
    const router=useRouter()

    const handleClick=()=>{
        console.log("placing your order")
        router.push("/product")
    }
    return(
        <div>
            <h1>Home Page</h1>
            <Link href="/Blog">
                Blog
            </Link>
            <Link href="/product" >Product</Link>
            <button onClick={handleClick}>Place Order</button>
        </div>
    )
}
export default Home;