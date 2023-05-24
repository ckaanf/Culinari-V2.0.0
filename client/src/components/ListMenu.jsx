import React from "react";
import styled from "styled-components";
import { Route, Routes, NavLink } from "react-router-dom";

const Container = styled.div`
	text-align: left;
	align-self: center;
	width: 1050px;
    display: flex;
    padding : 10px 0;
	.colbtn {
		width: 180px;
        display: block;
		cursor: pointer;
		padding: 10px;
        padding-left : 20px;
        margin-bottom: 4px;
        border-radius : 10px;
	}
    
    .colbtn:hover{
        font-weight : 500;
        background-color : #efefef;
    }

	.nav {
        width: 200px;
        padding-right: 10px;
        
		h3 {
			font-weight: 500;
			font-size: 35px;
			margin-bottom: 10px;
            padding-bottom : 15px;
            border-bottom : 3px solid #2D0D49;
		}

		ul {
			display: flex;
			flex-direction: column;

			li {
				flex: ${(props) => props.flex};
			}
		}
	}

	.content {
		padding: 30px 10px;
        width: calc(100% - 200px);
	}

	.active {
		color: #783CB7;
        font-weight : 500;
        background-color : #efefef;
	}
`;

const ListMenu = ({ title, list, flex = null }) => {
	let styles = { flex };
	const taptitle = [];
	const tapcontent = [];
	const children = [];

	for (let i in list) {
		taptitle.push(
			<li key={i}>
				<NavLink
					to={Object.keys(list[i])[0]}
					className={`colbtn ${({ isActive }) =>
						isActive ? "active" : ""}`}
				>
					{i}
				</NavLink>
			</li>
		);
		tapcontent.push(
			<Route
				key={i}
				path={Object.keys(list[i])[0]}
				element={Object.values(list[i])[0]}
			/>
		);

		if (list[i].children) {
			for (let j of list[i].children) {
				children.push(
					<Route
						key={j}
						path={Object.keys(j)[0]}
						element={Object.values(j)[0]}
					/>
				);
			}
		}
	}

	return (
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
};

export default ListMenu;
