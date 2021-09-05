import React, { useEffect , useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    
    useEffect(()=>{
        db.collection("movies").doc(id).get()
        .then((doc)=> {
            if(doc.exists)
            {
                setMovie(doc.data());
            }
            else {
            }
        })
    },[]);

    return (
        <Container>
        {movie && (
            <>
            <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <ImgTitle>
                <img src={movie.titleImg} />
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                {movie.subtitle}
            </Subtitle>
            <Description>
                {movie.description}
            </Description>
            </>)}
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height : calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;
    display:block;
    top:72px;


`

const Background = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index : -1;
    opacity : 0.8;
    img{
        width:100%;
        height:100%;
        @media(max-width :768px){
            width:initial;
        }
    }
`

const ImgTitle = styled.div`
    height:30vh;
    min-height:170px;
    min-width:200px;
    width:35vw;
    margin-top:60px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }   
`
const Controls = styled.div`
    display: flex;
    align-items : center;

`
const PlayButton = styled.button`
    border-radius:4px;
    font-size : 15px;
    display : flex;
    padding : 0px 24px;
    margin : 22px;
    align-items: center;
    height: 56px;
    background-color : rgb(249,249,249);
    border:none;
    letter-spacing : 1.8px;
    cursor : pointer;

    &:hover {
        background : rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background : rgba(0,0,0,0.3);
    border : 1px solid rgb(249,249,249);
    color : rgb(249,249,249);
`
const AddButton = styled.button`
    margin-right : 16px;
    height : 44px;
    width : 44px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 50%;
    border : 2px solid white;
    background-color : rgba(0,0,0,0.6);
    cursor : pointer;
    span {
        font-size : 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color : rgb(0,0,0);
`
const Subtitle = styled.div`
    color: rgb(249,249,249);
    font-size : 15px;
    min-height: 20px;
    margin-top:26px;
`
const Description = styled.div`
    line-height : 1.4;
    font-size:20px;
    margin-top : 16px;
    color : rgb(249,249,249);
    max-width:760px;
`