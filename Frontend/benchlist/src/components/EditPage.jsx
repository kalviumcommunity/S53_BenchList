import { Link } from "react-router-dom"
import axios from 'axios'
import '../App.css'
import { useEffect, useState } from "react"

const edit = () => {
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

    const handleDelete = (id) => {
        axios.delete(`https://s53-benchlist-server.onrender.com/data/${id}`)
        window.location.reload()
    }

    return (
        <>
            <div className="container">
                <div className="cardContainer">
                    {
                        data.map((elem) => {
                            return (
                                <div class="card">
                                    <div className="name-edit-trash">
                                        <div className="name">
                                            {elem.name}
                                        </div>
                                        <div className="trash-edit">
                                            <div className="edit">
                                                <Link to={`/9/${elem._id}`}><img src="https://www.goodfreephotos.com/albums/vector-images/big-pencil-vector-art.png" alt="" /></Link>
                                            </div>
                                            <div onClick={() => { handleDelete(elem._id) }} className="trash">
                                                <img src="https://th.bing.com/th/id/OIP.YSt4Bmh5ULTX7Uud8-KB6AAAAA?w=200&h=200&rs=1&pid=ImgDetMain" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img">
                                        <img src={elem.image} alt="" />
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
            </div>
        </>
    )
}
export default edit