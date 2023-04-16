import React from "react"

export default function Card(props) {
    console.log(props.haha)
    let badgeText
    // if (props.openSpots === 0) {
        if (props.haha.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.haha.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
           {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} ---- 1st way,it only displays soldout*/}
           {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* <img src={`../images/${props.img}`} className="card--image" /> */}
            <img src={`../images/${props.haha.coverImg}`} className="card--image" /> 
            {/* since in the data.js it jas coverImg name so we have to use this  */}

            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.haha.stats.rating}</span>
                <span className="gray">({props.haha.stats.reviewCount}) • </span>
                <span className="gray">{props.haha.location}</span>
            </div>
            <p className="card--title">{props.haha.title}</p>
            <p className="card--price"><span className="bold">From ${props.haha.price}</span> / person</p>
        </div>
    )
}