import React from "react";
import Input from "./Input";

const Home = () => {
	const [selectedYear, setSelectedYear] = React.useState([]);
	const [selectedMonth, setSelectedMonth] = React.useState({ "2022": [], "2021": [], "2020": [] });
	let years = [2022, 2021, 2020];
	let months = [
		["Jan", "Feb", "Mar", "Apr"],
		["May", "Jun", "Jul", "Aug"],
		["Sep", "Oct", "Nov", "Dec"]
	]

	const yearHelper = (year) => {
		if (selectedYear.includes(year)) {
			setSelectedYear(selectedYear.filter((item) => item !== year));
		} else {
			setSelectedYear([...selectedYear, String(year)]);
			let temp = selectedMonth;
			temp[year] = [];
			setSelectedMonth(temp);
		}
	}

	const monthHelper = (year, month) => {
		console.log(year, month);
		if (month === undefined) return;
		let temp = selectedMonth;
		temp[year] = months[month];
		setSelectedMonth(temp);
		// setSelectedYear(...selectedYear);
	}

	// console.log(selectedYear, selectedMonth);

	return (
		<div>
			<div className="card m-3" style={{ width: "18rem" }}>
				<div className="card-header fw-bold">Year</div>
				<ul className="list-group list-group-flush">
					{
						years.map((year) => {
							return (
								<li className="list-group-item" key={year}>
									<input className="form-check-input" type="checkbox" value={year} onClick={(e) => yearHelper(e.target.value)} id="flexCheckDefault" />
									&nbsp;
									<label className="form-check-label" htmlFor="flexCheckDefault">
										{year}
									</label>
								</li>
							)
						})
					}
				</ul>
			</div>
			<div>
			{
				selectedYear.map((year) => {
					return (
						<div className="card m-3" style={{ width: "18rem" }} key={`ll${year}`}>
							<div className="card-header fw-bold">
								{year}
							</div>
							<div className="card-body">
								<p className="card-text">
									<select className="form-select" onSelect={(e) => monthHelper(year, e.target.value)} aria-label="Default select example" defaultValue="4">
										<option value="4">Select months</option>
										<option value="0">Jan - Apr</option>
										<option value="1">May - Aug</option>
										<option value="2">Sept - Dec</option>
									</select>
								</p>
								<div>
									{
										selectedMonth[String(year)] && selectedMonth[String(year)]?.map((m) => {
											return (
												<div className="input-group mb-3" key={m}>
													<span className="input-group-text" id="inputGroup-sizing-default">{m}</span>
													<input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
												</div>
											);
										})
									}
								</div>
							</div>
						</div>
					);
				})
			}
			</div>
		</div>
	);
};

export default Home;
