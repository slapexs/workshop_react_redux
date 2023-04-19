import React from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"

type Props = {}

export default function Cart({}: Props) {
	const { name } = useParams()
	return (
		<div>
			<Navbar />
			<h1>Cart page {name}</h1>
		</div>
	)
}
