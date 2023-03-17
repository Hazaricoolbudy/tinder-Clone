import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import '../css/TinderCard.css'


const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "hazari",
            url: "https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?w=740&t=st=1679050795~exp=1679051395~hmac=ef3039683d75f05e8bf0c43367aa870f48423f7f80bdaadbc6dc55e285ca31fd"
        },
        {
            name: "balraj",
            url: "https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=826&t=st=1679055716~exp=1679056316~hmac=8cfd48477bd85acd5e422f7b504fe9f3e9866c7e3220713ddbf63b141f8d6c67"
        },
        {
            name: "Rohit",
            url: "https://www.carveyourcraving.com/wp-content/uploads/2021/06/creamy-chocolate-icecream.jpg"
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing ", nameToDelete);
        // setLastDirection(direction)

    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className=" tinderCard">
            <div className="tindrCard_container">
                {
                    people.map((person) => {
                        return (
                            <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}
                                onSwipe={(dir) => swiped(dir, person.name)}
                                onCardLeftScreen={() => outOfFrame(person.name)}>
                                <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                                    <h3>{person.name}</h3></div>
                            </TinderCard>
                        )
                    })
                }

            </div>



        </div>
    );
};

export default TinderCards;
