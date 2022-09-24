import { useState } from "react"
import { Link, Routes, Route, useNavigate } from "react-router-dom"

function Home() {
	const navigate = useNavigate()

	const [cityName, setcityName] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate("/city/" + cityName)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="h-screen w-screen flex flex-col justify-center items-center	"
		>
			<input
				value={cityName}
				onChange={(e) => setcityName(e.target.value)}
				className="p-2 rounded w-80 outline outline-2"
				type="text"
				placeholder="Enter a city name"
			/>
		</form>
	)
}

export default Home
