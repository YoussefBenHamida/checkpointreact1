import { Product } from "./Product"


const Image = ()=>{
    return (
        <>
        <img src={Product.url} alt="Phone"  style={{ height: '200px' }}/>
        </>
    )
}

export default Image