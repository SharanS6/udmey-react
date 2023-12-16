import sale from "../asserts/images/saleImage.jpg"

function SaleImage(){
    return(
        <div className="sale-image">
        <img src={sale} alt="sale"></img>
        <div className="sale-image__offer">
          <h2>Udemy Flash Sale! 24 hours to save</h2>
          <p>Get the Top Course for just 499. Just one day to save but a lifetime to learn</p>
    
        </div>
      </div>

    )
}

export default SaleImage