import React from "react";
import "./style.css";

function CharacterCard(props){
	return (
		<div className="card" onClick={() => props.clickFunc(props.id)}>
			<div className="image-container">
				<img alt={props.name} src={props.image} />
			</div>
			<div className="content">
				<ul>
					<li>{props.name}</li>
				</ul>
			</div>
		</div>

	);
}

export default CharacterCard;


{/* <span className="remove" onClick={() => props.deleteFriend(props.id)}>𝘅</span> */}