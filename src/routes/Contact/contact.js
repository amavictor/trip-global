import "./contact.scss"
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/button";

export default function Contact() {
    return(
        <div className={"bodied"}>
            <Navbar/>
            <div className={"contact-background"}>

                <div className={"outer-box"}>
                    <div className={"info"}>
                        <h4>Contact Information</h4>
                        <p>Fill out the form and our team will get back to you
                            within 24hrs.
                        </p>
                        <div className={"tel"}>
                            <p>Telephone:</p>
                            <p>+27604437346</p>
                            <p>+2349160759821</p>
                        </div>

                        <div className={"map"}>

                        </div>
                    </div>
                    <div>
                        <form>
                            <div className={"input-box"}>
                                <div className={"inputs"}>
                                    <input type={"text"} id={"name"} required={true}/>
                                    <label htmlFor={"name"}>First name:</label>
                                </div>
                                <div className={"inputs"}>
                                    <input type={"text"} id={"name"} required={true}/>
                                    <label htmlFor={"name"}>Last name:</label>
                                </div>
                            </div>

                            <div className={"input-box"}>
                                <div className={"inputs"}>
                                    <input type={"text"} id={"name"} required={true}/>
                                    <label htmlFor={"name"}>Email:</label>
                                </div>
                                <div className={"inputs"}>
                                    <input type={"text"} id={"name"} required={true}/>
                                    <label htmlFor={"name"}>Phone number:</label>
                                </div>
                            </div>
                            <textarea draggable={false}/>

                            <Button>Send</Button>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}