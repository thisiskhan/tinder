import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderBodyCard() {
    const [people, setPeople] = useState([

        {
            name: "Mark Zuckerberg",
            url: "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/04/Mark-Zuckerberg-on-Signal.jpg?fit=1200%2C801&ssl=1",
        },
        {
            name: "Elon Musk",
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/03/full/1612372052-5838.jpg",
        },
        {
            name: "Bill gates",
            url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        },
        {
            name: "Russian",
            url: "https://media-exp1.licdn.com/dms/image/C4E03AQGDkXfPVOtVTw/profile-displayphoto-shrink_800_800/0/1604939702926?e=1628121600&v=beta&t=QG6G8mQguMC4Ok1WsEhI2jkPNEN9EKaY8eaEdtrzkVI"
        },
        {
            name: "Raza Khan",
            url: "https://avatars.githubusercontent.com/u/72858063?v=4",
        }

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    const outOffFrame = (name) => {
        console.log(name + " left the screen")
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swip"
                        key={person.name}
                        preventSwip={["up", "down"]}
                        onSwip={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOffFrame(person.name)}
                    >

                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>

                ))}
            </div>





        </div>
    )
}

export default TinderBodyCard
