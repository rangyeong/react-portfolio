import Header from "../components/Header";



const Home = () => {
    
    return(
        <section className="Home" id="Home">
            {/* <Header />
            <div className="main_title">
                <p className="title_position">
                    <h1>FRONT-END </h1><br/>
                    <h1>EDVELOPER</h1>
                </p>
                <h2 className="title_name">LEE GA YOUNG</h2>
            </div>
            <div className="home_background">
                <p>
                    <img src='/img/main_bacground.png' />
                </p>
            </div> */}
            <div className="main_title">
                <div className="title_position">
                    <h1>FRONT-END </h1>
                    <h1>EDVELOPER</h1>
                </div>
                <h2 className="title_name">LEE GA YOUNG</h2>
            </div>
            <div className="home_background">
                <p className="img_wrap">
                    {/* <img src='/img/main_bacground02.png' /> */}
                </p>
            </div>
        </section>
    )
};

export default Home;