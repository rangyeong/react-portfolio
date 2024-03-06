import DropWater from "../components/DropWater";
import Header from "../components/Header";

const Contact = () => {
    return(
        <section className="Contact" id="Contact"> 
        
        <div>
                <div className="page_title">
                    <h2>CONTACT</h2>
                </div>
            </div>
            {/* <DropWater /> */}
            <div className="bg_underwater">
                <img src="/img/bottom_wave.png" />
            </div>
            <div className="contact_cards">
                <div className="contact_info">
                    <p className="info_photo">
                        <img src="/img/8.png" />
                    </p>
                    <div className="info_txt">
                        <ul className="info_icon
                        ">
                            <li className="user">imo</li>
                            <li className="cake">imo</li>
                            <li className="phone">imo</li>
                            <li className="email">imo</li>
                        </ul>
                        <ul className="info_me">
                            <li>이가영</li>
                            <li>2000.02.17</li>
                            <li>010-2653-4617</li>
                            <li>rkdud0217@naver.com</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="contact_email">
                    <form>
                        <p>
                            <input type="text" />
                            <input type="text" />
                        </p>
                        <p>
                            <textarea></textarea>
                        </p>
                        <p><button>Send</button></p>
                    </form>
                </div> */}
            </div>
        </section>
    )
};

export default Contact;