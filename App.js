import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const Cards = data.map(x => <Card 
        img={x.coverImg}
        rating={x.stats.rating}
        reviewCount={x.stats.reviewCount}
        country={x.location}
        title={x.title}
        price={x.price}
        />)
    return (
        <div>
            <Navbar />
            <Hero />
            {Cards}
        </div>
    )
}