import { Link } from "react-router-dom"
import axios from 'axios'
import '../App.css'
import { useEffect, useState } from "react"
// import data from "../../../../Backend/dataPakage.json"

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
    // }
    // export default benchList


    // export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="cardContainer">
                    {
                        data.map((elem) => {
                            return (

                                <div class="card">
                                    <div className="img">
                                        {/* <img src="https://th.bing.com/th/id/R.c533d613bcd759a8f1586600f135e90a?rik=9sz9wnyLtobccw&riu=http%3a%2f%2fwww.lpu.in%2facademics%2fimgs%2flive-projects%2ffull%2funi-mall.jpg&ehk=GWAf3Wq205PwwQzmwZfKu3kPI7jciJjpscHFa3za4js%3d&risl=&pid=ImgRaw&r=0" alt="" /> */}
                                        <img src={elem.image} alt="" />
                                    </div>
                                    <div className="location">
                                        <div className="locationEmoji"><img src="https://e7.pngegg.com/pngimages/457/630/png-clipart-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-thumbnail.png" alt="" /></div>
                                        <div className="text">{elem.placename}</div>
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