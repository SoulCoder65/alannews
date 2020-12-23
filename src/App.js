import React,{useEffect,useState} from "react"
import News from "./Components/News"
import Starter from "./Components/Starter"
import Header from "./Components/Header"
import NewsPage from "./Components/NewsPage"
import Container from '@material-ui/core/Container';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

// GEt api from .env
const api=process.env.REACT_APP_ALAN_API_KEY;

const App=()=>{
  const[checkRender,setRender]=useState("menu") // changing menus (choices and news articles)
  const[news,setNews]=useState([]) //show news fetch from api
  const[highlightCard,setHighlightCard]=useState(-1) //highlight current news
  useEffect(() => {
    alanBtn({
        key: api,
        onCommand: ({command,articles,number}) => {
          //Get news from api   
          if(command==="newsHeadlines")
              {
              
                setRender("latestnews")
                setNews(articles)
                setHighlightCard(-1);
              } 
              else if(command==="categories")
              {
                // news by categories
                setRender("latestnews")
                setNews(articles)
                setHighlightCard(-1);
                
              }
              else if(command==="highlight")
              {
                //high light current news card read by Alan
                setHighlightCard((prev)=>prev+1);
              }
              else if(command==="open")
              {
                // Open article link
                //using wordToNumbers to ignore miscommunication(4 instead of four or for)
                const wrdTonum=number.length>2?wordsToNumbers(number,{fuzzy:true}):number
                const article=articles[wrdTonum-1];
                if(wrdTonum>20)
                {
                  alanBtn().playText("I am not getting. Try again please");

                }
                else if(article)
                {
                  window.open(articles[wrdTonum-1].url,'_blank')
                  alanBtn().playText("Opening......");
                }
                
              }
              // Return to home page
              else if(command==="goback")
              {
                alanBtn().playText("Ok")
                setRender("menu")
              } 
              
            }
    });
}, []);
  return<>
  
    <Header/>
    <Container maxWidth="lg"  >
      {
        checkRender==="menu"?(
          <>
        <Starter/>
            <News/>
            </>): checkRender==="latestnews"?((news.length!=0?(<NewsPage dataList={news} highlightcheck={highlightCard}/>):(<h1>{news.length}</h1>)))
            :<h1>Hello</h1>
      }
      
   </Container>
  </>
}
export default App;