import React from "react"
import { Link } from "react-router-dom"

type Props = {}

function Navbar({}: Props) {
	return (
		<div>
			{" "}
			<ul className="navbar">
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/cart"}>Cart</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
