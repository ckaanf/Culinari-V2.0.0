import styled from "styled-components";

const BasicButton = ({href, children, font, radius, p_height, p_width, onClick, disabled}) =>{
    const styles = {font, radius, p_height, p_width, disabled};
    return(
            <Colbtn {...styles} href={href} onClick={onClick}>
                {children}
            </Colbtn>
    )
}

BasicButton.defaultProps = {
    children: null,
    font:"16",
    radius:"4",
    p_height:"30",
    p_width:"100", 
}

const Colbtn = styled.a`
    background-color: ${props => props.disabled ? "rgba(128, 128, 128, 0.597)" : "white"};
    color: ${props => props.disabled ? "white" : "#783CB7"};
    border: 2px solid ${props => props.disabled ? "rgba(0, 0, 0, 0.491)" : "#783CB7"};
    cursor: pointer;
    ${props => props.disabled ? "pointer-events: none;" : null}
    vertical-align: middle;
    border-radius: ${props => props.radius}px;
    font-size: ${props => props.font}px;
    // padding: ${props => props.p_height}px ${props => props.p_width}px;
    width : ${props => props.p_width}px;
    height : ${props => props.p_height}px;
    line-height : ${props=> props.p_height-5}px;
    display : block;
    text-align: center;

    &:hover{
        background-color : #783CB7;
        color : white;
    }
`
export default BasicButton;
