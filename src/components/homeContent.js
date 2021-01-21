import moment from "moment";
import React from "react";
import {Card,Button,ListGroup, CardDeck,Row,Image, Pagination} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import './footer.css'
import CarouselImage from "./carouselImage";
import db from "./firebase";
import FetchedQus from "./fetchedQus";
import HowToPlay from "./homeblogs/howtoPlay";
import Comment from "./homeblogs/comment";
import FetchComment from "./homeblogs/fetchComment";
import { PaginationSetup } from "./homeblogs/pagination";
import CommentPagination from "./homeblogs/commentPagination";

class HomeContent extends React.Component {
 state={
   curTime: new Date().toLocaleString(),
   questions:[],
   loading: false,
   currentPage: 1,
   postsPerPage: 5,
   commentData:[],
   loadingC: false,
   currentPageC: 1,
   postsPerPageC: 5,
 }
 
 componentDidMount(){
  
 const getPosts = async ()=> {
  this.setState({ loading: true });
 await db.collection("dailyquiz").orderBy('timestamp','desc')
  .get()
  .then(querySnapshot=> {
    const questions = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
          // doc.data() is never undefined for query doc snapshot
          questions.push(data);
       
      });
      this.setState({
        questions:questions
      })
     console.log("questions:",questions);
     this.setState({ loading: false });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
      
  });
 };
 getPosts();
 

}

componentDidUpdate(){

  const getComments =async ()=>{
    await db.collection("postComment").orderBy('timestamp','desc')
     .get()
     .then(querySnapshot=> {
       const commentData = [];
         querySnapshot.forEach(doc => {
           const data = doc.data();
             // doc.data() is never undefined for query doc snapshot
             commentData.push(data);
         });
         this.setState({
          commentData:commentData
        })
        console.log("comment:",commentData);
     })
     .catch(function(error) {
         console.log("Error getting documents: ", error);
     });
   };
   
   getComments();
}

  render()
{

// posts section
  const { currentPage, postsPerPage, questions, loading } = this.state;
  const { currentPageC, postsPerPageC, commentData, loadingC } = this.state;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = questions.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => this.setState({ currentPage: pageNum });

  const nextPage = () => this.setState({ currentPage: currentPage + 1 });

  const prevPage = () => this.setState({ currentPage: currentPage - 1 });

// comment section
  const indexOfLastPostC = currentPageC * postsPerPageC;
  const indexOfFirstPostC = indexOfLastPostC - postsPerPageC;
  const currentComments = commentData.slice(indexOfFirstPostC, indexOfLastPostC);

  const paginateC = pageNum => this.setState({ currentPageC: pageNum });

  const nextPageC = () => this.setState({ currentPageC: currentPageC + 1 });

  const prevPageC = () => this.setState({ currentPageC: currentPageC - 1 });

  var curDate =moment(this.state.curTime).format('Do MMM YYYY');
  var curDateTime =moment(this.state.curTime).subtract(1,'d').fromNow();
  return (
    <div>
        <ListGroup variant="flush">

  <Card>
    <Card.Header as="h3"> Get Daily Flipkart Quiz answers
    <span style={{color:"red"}}> {curDate}</span>.Answers these Quiz Answers to get Coupon Discount,
    amazing Gifts and earn Flipkart super coins.
       </Card.Header><br></br>
       <Card.Subtitle>get flipkart Quiz answers daily<span style={{color:"red"}}> in
        first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
        by answering correctly </Card.Subtitle>
        <br></br>
       <Card.Body>
         
     <Row> <Card.Text as="h4">&nbsp; Join us: &nbsp;&nbsp; </Card.Text>
     <Card.Subtitle>  <a  href="https://t.me/FlipkartDailyQuiz" ><Button>
  <FontAwesomeIcon icon={faTelegram} size="2x"  />Join Telegram  </ Button>
</a><br></br><br></br>
<a  href="https://github.com/satyendrasingh8" ><Button variant="dark">
  <FontAwesomeIcon icon={faGithub} size="2x"  /><b> Follow on Github  </b> </ Button>
</a><br></br>
 </Card.Subtitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Card.Link href="/home"><b><i>WebServ4u.com</i> </b></Card.Link>
     </Row><br></br>
 <CarouselImage />
    <Card.Text><br></br>
      Here you have to get quick live updates for each Trivia Quiz Question everyday at 11:50pm.
      By answering these Quiz Questions you can win many gift vouchers,coupons,gifts,super coins etc.
      &nbsp; <br></br> <Image src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
      width={60}
      height={60}
      roundedCircle />
      <a href="https://www.flipkart.com/">&nbsp;<b>Flipkart</b> </a>
      <b><i>daily Trivia Quiz is Back.</i>  </b>Daily Trivia Quiz is generally asks
       General Knowledge based Questions.Flipkart Quiz is started at 12:00Am and ends at 11:59am.
       <b><i>QuizBeater</i></b> provide these answers at 11:50pm daily.By answering them you have to
        get some relevant prize,coupons,gift or super coins  by regular participation in daily quiz.
        <b>Make sure you have to follow our official <a href="#"><b><b>Telegram</b></b> </a> channel to get daily 
          imediate answers for each Quiz  </b>
    </Card.Text>
   
     <HowToPlay />

     
     
         <div>
        <FetchedQus posts={currentPosts} loading={loading} curDate={curDate} />
        <PaginationSetup postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
         </div>
      
     
     



       <a  href="https://t.me/FlipkartDailyQuiz" ><Button variant="info">
  <FontAwesomeIcon icon={faTelegram} size="2x"  /> &nbsp;<b> Join our Telegram Group</b>  </ Button>
</a>
  </Card.Body>
  <h4> Comments:</h4>
 <div>

 <div>
        <FetchComment posts={currentComments} loading={loadingC} curDateTime={curDateTime} />
        <CommentPagination postsPerPage={postsPerPageC} totalPosts={commentData.length} paginate={paginateC} nextPage={nextPageC} prevPage={prevPageC} />
         </div>

 </div>

   <Comment/>  
 

</Card>
</ListGroup>
 

    </div>
  );

  }
}

export default HomeContent;
