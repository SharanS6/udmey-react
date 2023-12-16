import program1 from "../asserts/images/Program1.jpg"
import program2 from "../asserts/images/Program2.jpg"
import program3 from "../asserts/images/Program3.jpg"
import program4 from "../asserts/images/Program4.jpg"


function Recommended(){
    return(
<div className="recommended">
  <h1 className="recommended__title">Recommended for you</h1>
  <p>Pick the best fit</p>
  <div className="recommended__containter">  
    <div className="course-card">

    <img src={program1} alt="course1"></img>
    <h3>2023 Python Data Visulisation Masterclass</h3>
    <p>Col steele</p>
    <p>4 ⭐⭐⭐⭐</p>
    <p>449 <del>1999</del></p>

  </div>
  <div className="course-card">
    
    <img src={program2}alt="course2"></img>
    <h3>Automate the Boring Stuff with Python Programming</h3>
    <p>Angela Yu</p>
    <p>4.9⭐⭐⭐⭐</p>
    <p>449<del>2999</del></p>

  </div>
  <div className="course-card">
    
    <img src={program3} alt="course3"></img>
    <h3>100 Days of Code: The Complete Python Pro Bootcamp for 2023</h3>
    <p>AI Sweigart</p>
    <p>4.5⭐⭐⭐⭐</p>
    <p>449<del>1999</del></p>

  </div>
  <div className="course-card">
    
    <img src={program4} alt="course4"></img>
    <h3>The Complete Python Bootcamp From Zero to Hero in Python</h3>
    <p>Jose Portilla</p>
    <p>4.9⭐⭐⭐⭐</p>
    <p>449<del>1999</del></p>
  </div>

  </div>

  </div>

    )
}

export default Recommended