import { Link } from "react-router-dom"
import './DummyData.css'

export default function Navbar() {
  return (
    <>
    <div className="cardContainer">
        <div class="card">
            <div className="img">
                <img src="https://th.bing.com/th/id/R.c533d613bcd759a8f1586600f135e90a?rik=9sz9wnyLtobccw&riu=http%3a%2f%2fwww.lpu.in%2facademics%2fimgs%2flive-projects%2ffull%2funi-mall.jpg&ehk=GWAf3Wq205PwwQzmwZfKu3kPI7jciJjpscHFa3za4js%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className="placename">
                <p className="text">
                    Uni Mall
                </p>
            </div>
            <div className="location">
                <div className="locationEmoji"><img src="https://e7.pngegg.com/pngimages/457/630/png-clipart-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-thumbnail.png" alt="" /></div>
                <div className="text">On Floor 5&6</div>
            </div>
        </div>
    </div>
    </>   
  )
}