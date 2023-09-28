import { styled } from "styled-components";



const WapperGallery = styled('div')`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
`

const WrapperImage = styled('div')`
    margin: 15px;
    cursor: pointer;
    overflow: hidden;
    width: 18vw;
    height: 18vw;
    img {
        width: 100%;
        transition: transform 500ms ease;
        &:hover {
            transform: scale(1.1);
        }
    }
`



function Gallery(props) {
    return(
        <WapperGallery>
            {props.dataImage.map((d) => {
                return (
                    <WrapperImage>
                        <img src={d.image}/>
                    </WrapperImage>
                )
            })}
        </WapperGallery>
    )
}

export default Gallery