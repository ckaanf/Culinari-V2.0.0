import React from "react";
import styled from "styled-components";
import { Route, Routes, NavLink } from "react-router-dom";

const Container = styled.div`
  text-align: left;
  align-self : center;
  width:1050px;
  .colbtn{
    width : 140px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d7d7d7;
    border-left: 1px solid #d7d7d7;
    border-right: 1px solid #d7d7d7;
    border-radius: 12px 12px 0 0;
    font-weight : 500;
    cursor: pointer;
    padding: 10px 16px;
    
  }

  .nav {
      h3{
        font-weight : 500;
        font-size: 35px;
        margin-bottom:25px;
      }

      ul{
        display:flex;
        margin-top: 10px;
        gap: 7px;

        li{
          flex:${props => props.flex};
        }

      }
    
  }

  .content {
      border-top: 1px solid #D7D7D7;
      padding: 30px;
  }

  .active{
    color: white;
    background-color: #2D0D49;
    border-top: 1px solid #2D0D49;
    border-left: 1px solid #2D0D49;
    border-right: 1px solid #2D0D49;
  }

  
`;

const Tab = ({title, list, flex = null})=>{
    let styles = {flex};
    const taptitle = []
    const tapcontent = []
    const children = []

      for(let i in list){
        taptitle.push(
          <li key={i}>
            <NavLink
            to={Object.keys(list[i])[0]}
            className={`colbtn ${({isActive})=> (isActive) ? "active" : ""}`}
            >{i}</NavLink>
          </li>
        );
        tapcontent.push(
          <Route key={i} path={Object.keys(list[i])[0]} element={Object.values(list[i])[0]}/>
        );

        if(list[i].children){
          for(let j of list[i].children){
            children.push(
              <Route key={j} path={Object.keys(j)[0]} element={Object.values(j)[0]}/>
            )
          }
        };
      }
    
    return(
        <Container {...styles}>
          <div className="nav">
            <h3>{title}</h3>
            <ul>{taptitle}</ul>
          </div>
          <div className="content">
            <Routes>
            {tapcontent}
            {children}
            </Routes>
          </div>
        </Container>
    );
}

export default Tab;


