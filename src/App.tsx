import { FC } from "react"
import { RootState } from "./store/store"
import { useSelector, useDispatch } from "react-redux"
import { plus, minus, reset } from "./slices/counterSlice"
import Navbar from "./components/Navbar"

// css
import "./App.css"

const App: FC = () => {
	const count = useSelector((state: RootState) => state.counter.counter)
	const dispatch = useDispatch()

	return (
		<div>
			<Navbar />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					flexDirection: "column",
				}}
			>
				<h1>Counter: {count}</h1>
				<div>
					<button
						style={{ marginRight: 10, padding: 10, backgroundColor: "green" }}
						onClick={() => dispatch(plus())}
					>
						Plus
					</button>
					<button
						style={{ marginRight: 10, padding: 10, backgroundColor: "red" }}
						onClick={() => dispatch(minus())}
					>
						Minus
					</button>
					<button
						style={{ marginRight: 10, padding: 10, backgroundColor: "orange" }}
						onClick={() => dispatch(reset())}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
