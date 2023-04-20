import Navbar from "../components/Navbar"
import "../Cart.css"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { plus } from "../slices/counterSlice"
import { useDispatch } from "react-redux"

type Props = {}

export default function Cart({}: Props) {
	const counter = useSelector((state: RootState) => state.counter.counter)
	const listElem = []
	for (let index = 0; index < counter; index++) {
		listElem.push(index + 1)
	}
	const dispatch = useDispatch()
	return (
		<div>
			<Navbar />
			<div className="setScreen">
				<h1>Cart page</h1>
				<h2>Counter now: {counter}</h2>

				<div style={{ margin: "30px 0px" }}>
					<button
						className="btn-add"
						onClick={() => {
							dispatch(plus())
						}}
					>
						Add item
					</button>
				</div>

				{/* List */}
				<div className="card-group">
					{listElem.map((elem, index) => (
						<div className="card" key={index}>
							Element {elem}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
