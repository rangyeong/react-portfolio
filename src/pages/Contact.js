import DropWater from "../components/DropWater";
import Header from "../components/Header";

const Contact = () => {
    return(
        <div className="Contact">
            <Header />    
            <DropWater />
            <div className="bg_underwater">
                <img src="/img/bottom_wave.png" />
            </div>
            <div className="contact_cards">
                <div className="contact_info">
                    <p>
                        <img />
                    </p>
                    <div>
                        <ul>
                            <li>imo</li>
                            <li>imo</li>
                            <li>imo</li>
                            <li>imo</li>
                        </ul>
                        <ul>
                            <li>이가영</li>
                            <li>2000.02.17</li>
                            <li>010-2653-4617</li>
                            <li>rkdud0217@naver.com</li>
                        </ul>
                    </div>
                </div>
                <div className="contact_email">
                    <form>
                        <p>
                            <input type="text" />
                        </p>
                        <p>
                            <input type="text" />
                        </p>
                        <p>
                            <textarea></textarea>
                        </p>
                        <p><button>Send</button></p>
                    </form>
                </div>
            </div>
            Contact
        </div>
    )
};

export default Contact;