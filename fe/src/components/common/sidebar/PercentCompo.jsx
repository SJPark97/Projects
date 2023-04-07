import React from "react";
import styled from "styled-components";

const Div = styled.div`
	margin-right: 8px;
	border-radius: 16px;
	height: 16px;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Completed = styled.div`
	background-color: #1C9BFF;
	border-radius: 16px 0px 0px 16px;
	height: 16px;
`


export default function PercentCompo(props) {
	const percent = props.percent
	return (
		<Div>
			<Completed style={{width: `${percent}`}}></Completed>
		</Div>
	)
}