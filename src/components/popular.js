import Azure from "../assets/images/azure.jpg"
import Cpluss from "../assets/images/cpluss.jpg"
import Css from "../assets/images/css.jpg"
import Cybersecurity from "../assets/images/cybersecurity.jpg"
import Devops from "../assets/images/devops.png"
import Java from "../assets/images/java.jpg"
import Mongodb from "../assets/images/mongodb.jpg"
import Snowflake from "../assets/images/snowflake.jpg"

function Popular()
{
    return(
        <div className="popular">
        <h3 className="popular_title">Most Popular</h3>
        <p className="popular_subtitle">Pick the best fit</p>
        <div className="popular_container">
           

                <div className="course-card">
                    <img src={Snowflake} alt="snowflake"/>               
                    <h3>Snowflake</h3>
                    <p>Mosh</p>
                    <p>4.0⭐⭐⭐⭐</p>
                    <p>8999 <del>9999</del></p>
                </div>
        
                <div className="course-card">
                <img src={Css} alt="css"/>              
                <h3>Beginner To Advanced CSS</h3>
                <p>Davis</p>
                <p>3.0⭐⭐⭐</p>
                <p >399 <del>1199</del></p>
            </div>
               
      
        <div className="course-card">
        <img src={Devops} alt="dveops"/>                
        <h3>DevOps Tutorial</h3>
        <p>Jonhson</p>
        <p>3.0⭐⭐⭐</p>
        <p >3999 <del>7999</del></p>
    </div>

            <div className="course-card">
                <img src={Java} alt="java"/>            
                <h3>Programming In Java</h3>
                <p>Mosh</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>299 <del>399</del></p>
            </div>
            <div className="course-card">

            <img src={Azure} alt="azure"/>          
            <h3>Microsoft Azure</h3>
            <p>Benterison</p>
            <p>3.0⭐⭐⭐</p>
            <p >1499 <del>2999</del></p>
        </div>
         
            <div className="course-card">
                <img src={Cybersecurity} alt="security"/>          
                <h3>Cyber Security Fundamentals</h3>
                <p>Robert</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>399 <del>599</del></p>
            </div>

            <div className="course-card">
                <img src={Mongodb} alt="mongodb"/>         
                <h3>Advanced Mongodb Tutorial</h3>
                <p>Robert</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>3999 <del>5999</del></p>
            </div>

            <div className="course-card">
                <img src={Cpluss} alt="cpluss"/>              
                <h3>C++ Fundamentals</h3>
                <p>Alex</p>
                <p>3.0⭐⭐⭐</p>
                <p>399 <del>699</del></p>
            </div>
        </div>
  
        </div>
    
    )
}
export default Popular