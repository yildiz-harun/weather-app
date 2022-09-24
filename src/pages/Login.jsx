import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setApiKey } from "../features/apiKey/apiKeySlice"

function Login() {
	const [error, setError] = useState("")
	const [apiKeyInput, setApiKeyInput] = useState("")

	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await axios.get(
				"http://api.openweathermap.org/data/2.5/forecast?q=london&appid=" +
					apiKeyInput
			)
			console.log(response)
			dispatch(setApiKey(apiKeyInput))
		} catch (error) {
			setError(error.response.data.message)
		}
	}

	return (
		<form
			className="flex flex-col items-center justify-center h-screen w-screen"
			onSubmit={handleSubmit}
		>
			{error && <label className="mb-1">{error}</label>}
			<input
				value={apiKeyInput}
				onChange={(e) => {
					setApiKeyInput(e.target.value)
				}}
				className="p-2 rounded w-80 outline outline-2"
				type="text"
				placeholder="Enter a valid api key and press enter..."
			/>
		</form>
	)
}

export default Login
