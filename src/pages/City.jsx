import { json, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
function City() {
	const apiKey = useSelector((state) => state.apiKey.value)
	const { id } = useParams()
	const [temp, setTemp] = useState("")
	const [iconId, setIconId] = useState("")
	const [description, setDescription] = useState("")
	const fetch = async () => {
		const response = await axios.get(
			"http://api.openweathermap.org/data/2.5/forecast?q=" +
				id +
				"&lang=tr&appid=" +
				apiKey +
				"&units=metric"
		)
		setTemp(response.data.list[0].main.temp)
		setIconId(response.data.list[0].weather[0].icon)
		setDescription(response.data.list[0].weather[0].description)
	}
	useEffect(() => {
		fetch()
	}, [])

	return (
		<div className="flex flex-col justify-start items-center h-screen pt-16">
			<div className="w-72 flex justify-center items-center">
				<div className="text-4xl">{id.toUpperCase()}</div>
				<img
					className="w-28"
					src={"http://openweathermap.org/img/w/" + iconId + ".png"}
					alt="weather-icon"
				/>
			</div>
			<div className="bg-gray-100 p-6 flex justify-start items-center w-72">
				<div className="text-2xl mx-3">
					{"Hava: " + description.toUpperCase()}
				</div>
				<div className="text-2xl mx-3">{temp + "°"}</div>
			</div>
		</div>
	)
}

export default City
