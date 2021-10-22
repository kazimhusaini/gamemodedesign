import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const slideImages = [
  {
    url: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    name:'Valheim',
    info:'Action Games',
    price: '$8.15'
  },
  {
    url: 'images/slide_2.jpg',
    name:'BIOSHOCK: THE COLLEC...',
    info:'Action Games',
    price: '$8.15'
  },
  {
    url: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    name:'Unravel Two ',
    info:'Action Games',
    price: '$8.15'
  },
];

export default function ImgMediaCard() {
  return (
    <>
      <Slide>
          {slideImages.map((slideImage, index)=> (
                      <div className="each-slide" key={index}>
    <Card style={{ width: "204px !important", marginRight: "25px" }}>
      <CardMedia
        component="img"
        alt="Valheim"
        height="140"
        image={`url(${slideImage.url})`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {slideImage.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {slideImage.info}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {slideImage.price}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      
    </Card>
    </div>
       ))} 
       </Slide>
</>
    // <div className="slide-container">
    //   <Slide>
    //    {slideImages.map((slideImage, index)=> (
    //       <div className="each-slide" key={index}>
    //         <div style={{'backgroundImage': `url(${slideImage.url})`}}>
    //           <span>{slideImage.caption}</span>
    //         </div>
    //       </div>
    //     ))} 
    //   </Slide>
    // </div>
  )
}







// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// export default function ImgMediaCard() {
//   return (
//     <Card style ={{width:"204px !important",marginRight:"25px" }}>
//       <CardMedia
//         component="img"
//         alt="Valheim"
//         height="140"
//         image=".\images\cardimg1.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         Valheim
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         Action Games
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         $8.15
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

//   );
// }
