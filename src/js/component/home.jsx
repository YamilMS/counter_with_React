import React, { useState, useEffect } from "react";
import Counter from "./Counter.jsx";
import ClockIcon from "./ClockIcon.jsx";

//create your first component
const Home = () => {
	const [count, setCount]= useState(0)

	useEffect(() => {
        const interval = setInterval(() => {
            setCount(count=> count+1);
            }, 1000);
            return () => clearInterval(interval);
        }, []);

		const prueba= count.toString().split('').reverse()

	return (
		<div className="bg-dark container-fluid d-flex justify-content-center flex-wrap pt-3">
			<ClockIcon/>
			<Counter seconds={prueba[5]}/>
			<Counter seconds={prueba[4]}/>
			<Counter seconds={prueba[3]}/>
			<Counter seconds={prueba[2]}/>
			<Counter seconds={prueba[1]}/>
			<Counter seconds={prueba[0]}/>
		</div>
	)
};

export default Home;
