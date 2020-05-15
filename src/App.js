import React from 'react';
import './App.css';
import $ from 'jquery';

let isNavNext = true;
let isNavPrev = false;


class  App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
     centerOfWidth:0,
    windowWidth:0
  }
}

componentDidMount(){
    $(".cata-sub-nav").on('scroll', function() {
        var val = $(this).scrollLeft();
        if($(this).scrollLeft() + $(this).innerWidth()>=$(this)[0].scrollWidth){
            isNavNext = false;
          } else {
          isNavNext=true;
        }
        if(val == 0){
          isNavPrev=false;
        } else {
        isNavPrev=true;
        }
      }); 
}



onNextClick = () =>{
  console.log("onNextClick()");
  $(".cata-sub-nav").animate( { scrollLeft: '+=460' }, 200);
}

onPreviouseClick = () =>{
  console.log("onPreviouseClick()");
  $(".cata-sub-nav").animate( { scrollLeft: '-=460' }, 200);
}

moveImageToLeftOrRight = () =>{
const { windowWidth, centerOfWidth} = this.state;

if(windowWidth < centerOfWidth ) {
if(isNavPrev)  
this.onPreviouseClick();
}else  {
  if(isNavNext)
  this.onNextClick();
}
}

getCenterOfImageWidth = ({target:img}) =>{
  console.log("Math.floor(div.offsetWidth/2) : ",Math.floor(window.innerWidth/2))
  this.setState({ centerOfWidth: Math.floor(window.innerWidth/2)});
}

getXYCoordinates = (e) =>{
  this.setState({windowWidth: e.screenX });
}

  render(){
    return (
      <>
      <div  className="cata-sub-nav">
        <img style={isNavPrev || isNavNext ? {width:'1999px',cursor:'pointer'} : {width:'1999px'}} src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg" 
        onLoad={this.getCenterOfImageWidth} onMouseDown={this.getXYCoordinates} onClick={this.moveImageToLeftOrRight}
         />
     </div>
   </>
    );
  }
  
}

export default App;
