import Css from "../assets/images/css.jpg"
import Java from "../assets/images/java.jpg"
import Cybersecurity from "../assets/images/cybersecurity.jpg"
import Cpluss from "../assets/images/cpluss.jpg"


function Recommended()
{
    return(
        <div class="recommended">
        <h3 class="recommended_title">Recommended For You</h3>
        <p class="recommended_fit">Pick the best fit</p>

        <div class="recommended_container">

            <div class="course-card">
                <img src={Css} alt="css"/>               
                <h3>Beginner To Advanced CSS</h3>
                <p>Davis</p>
                <p>3.0⭐⭐⭐</p>
                <p>599 <del>1499</del></p>
            </div>

            <div class="course-card">
                <img src={Java} alt="java"/>               
                <h3>Programming In Java</h3>
                <p>Mosh</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>399 <del>699</del></p>
            </div>


            <div class="course-card">
                <img src={Cybersecurity} alt="Cyber"/>               
                <h3>Cyber Security Fundamentals</h3>
                <p>Robert</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>299 <del>599</del></p>
            </div>



            <div class="course-card">
                <img src={Cpluss} alt="cpluss"/>               
                <h3>C++ Fundamentals</h3>
                <p>Alex</p>
                <p>3.0⭐⭐⭐</p>
                <p>299 <del>599</del></p>
            </div>
        </div>
    </div>
  
    )
}
export default Recommended