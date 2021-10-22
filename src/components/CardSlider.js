import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import cardimg1 from "../images/cardimg1.jpg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React from 'react'
import ImgMediaCard from "./Card";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    cardMedia: {
        height: "274px",
        borderRadius: "6px",

    },
    itemClass:{
        // width: "229px !important",
        // marginRight: "25px",
        background: "transparent" 
    },
    card:{
        background: "transparent",
                marginRight: "25px",
    },
    Arr:{
        minWidth:"30px !important",
        height:"30px !important",
        borderRadius:'50% !important',
        border:"2px solid #ffffff !important",
        color:"#ffffff  !important",
        padding:"0  !important",
        marginLeft:"25px !important",

    },
    groupBtn:{
        top:"54%",
        right:"83px",
        position:"absolute",
    }
}))
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        // partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        // partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        // partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
};


const slideImages = [
    {
        img: "images/cardimg1.jpg",
        name: 'Valheim',
        info: 'Action Games',
        price: '$8.15'
    },
    {
        img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        name: 'kazim',
        info: 'Action Games',
        price: '$8.15'
    },
    {
        img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        name: 'Unravel Two ',
        info: 'Action Games',
        price: '$8.15'
    },
    {
        img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        name: 'Valheim',
        info: 'Action Games',
        price: '$8.15'
    },
    {
        img: 'images/slide_2.jpg',
        name: 'kazim',
        info: 'Action Games',
        price: '$8.15'
    },
    {
        img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        name: 'Unravel Two ',
        info: 'Action Games',
        price: '$8.15'
    },
];

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const classes = useStyles();
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className={classes.groupBtn}>
      <div className="carousel-button-group">
        <Button className={ `${classes.Arr} ${currentSlide === 0 ? 'disable' : ''}`}   onClick={() => previous()} ><KeyboardArrowLeftIcon/></Button>
        <Button className={classes.Arr} onClick={() => next()}> <KeyboardArrowRightIcon /></Button>
      </div>
      </div>
    );
  };
export default function CardSlider() {
    const classes = useStyles();
    return (
        <>
        <Carousel
        className={classes.carousel}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            arrows={false}
             customButtonGroup={<ButtonGroup />} 
             renderButtonGroupOutside={true}          
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass={classes.itemClass}

        >
            {slideImages.map((slideImage, index) => (
                // <div className="each-slide" key={index}>
                    <Card className={classes.card} key={index}>
                        <CardMedia
                            className={classes.cardMedia}
                            component="img"
                            alt="Valheim"
                            height="140"
                            image={slideImage.img}
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

                    </Card>
                // </div>
            ))}
        </Carousel>
      </>

    )
}

