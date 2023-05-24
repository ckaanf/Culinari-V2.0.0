import styled from "styled-components";

const Layout = styled.div`
  width:${props => props.width === undefined ? "90%" : props.width};
  margin: 0 auto;
  .container {
    padding-bottom: ${ props => props.line === props.filltap ? "0px" : "10px"};
    margin-bottom: 10px;
    ${props => props.line ? "border-bottom:1px solid #D7D7D7" : null};
  }

  .simple{
    display:flex;
    align-items:center;
    position: relative;
    padding-bottom :10px;

    span{
      font-size : 30px;
      font-weight: 500;
    }

    .subtitle{
      color:#783CB7;
      font-size:16px;
      margin-left: 10px;
      font-weight: normal;
    }

    .side{
      position: absolute;
      right:0;
    }
    
    .side>a>span{
      font-size:16px;
      font-weight: normal;
    }
  }


  .icons{
    margin-right:2px;
  }

  .filter{
    margin-top:${ props => props.filltap ? "20px" : "0px"};
  }
`;

function Mypagehead({
  children,title,subtitle,icon,
  line,filltap,side_title,width,tab
}) {
  const styles = {line, filltap,width}
  return (
    <Layout {...styles}>
      <div className="container">
        <div className="simple">
          {icon !== null ? <div className="icons">{icon}</div> : null}
          <span>{title}</span>
          {side_title !== null ? <div className="side">{side_title}</div> : null}
          {subtitle !== null ?  <span className="subtitle">{subtitle}</span> : null}
        </div>
        {filltap ? <div className="filter">{tab}</div> : null}
      </div>
      <div>{children}</div>
    </Layout>
  );
}

Mypagehead.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
    icon: null,
    side_title:null,
    line: false,
    filltap: false,
}

export default Mypagehead;
