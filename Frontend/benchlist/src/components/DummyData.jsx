import { Link } from "react-router-dom"
import axios from 'axios'
import '../App.css'
import { useEffect, useState } from "react"

const benchList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get("https://s53-benchlist-server.onrender.com/data")
                .then((data) => {
                    setData(data.data);
                    console.log(data);
                }).catch((err) => {
                    console.log(err);
                })
        }
        getData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="cardContainer">
                    {
                        data.map((elem) => {
                            return (

                                <div class="card">
                                    <div className="img">
                                        <img src={elem.img} alt="" />
                                    </div>
                                    <div className="location">
                                        <div className="locationEmoji"><img src="https://e7.pngegg.com/pngimages/457/630/png-clipart-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-thumbnail.png" alt="" /></div>
                                        <div className="text">{elem.placeName}</div>
                                    </div>
                                    <div className="placename">
                                        <p className="text">
                                            {elem.location}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="editcard">
                    <div className="text">
                        <h3>You find any new place?</h3>
                    </div>
                    <div className="addButton">
                        <button><Link to="/7">ADD</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default benchList