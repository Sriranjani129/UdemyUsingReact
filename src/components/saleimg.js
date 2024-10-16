import Udemyimg from "../assets/images/udemyimg.jpg"

function Saleimg()
{
    return(
        <div className="sale-img">
        <img src={Udemyimg} alt="salesimg"/>
        <div className="sale_img_off">
            <h2>Udemy Flash Sale! 24 Hours To Save</h2>
            <p>Get the top courses for just 499. Just one day to save but a 
                life time to learn
            </p>
        </div>
    </div>
   
    )
}
export default Saleimg