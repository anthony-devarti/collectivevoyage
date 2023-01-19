import Widget from "../Components/Subcomponents/Widget";
import Countdown from "../Components/Subcomponents/Countdown";

export default function TripPage() {
    return (
        <div className="trips">
            <div className="sidebar">
                <Widget 
                height={'90vh'} 
                width={'30vw'} 
                title={'Trip Details'}
                />
            </div>
            <div className="right-side">
                <div className="top-right">
                    <Widget 
                    height={'18vw'} 
                    width={'18vw'} 
                    title={"Countdown"}
                    content={<Countdown distance={"7"}/>}
                    />
                    <Widget 
                    height={'18vw'} 
                    width={'18vw'} 
                    title={"Cards"}
                    />
                    <Widget 
                    height={'18vw'} 
                    width={'18vw'} 
                    title={"Money"}
                    />
                    <Widget 
                    height={'25vh'} 
                    width={'27vw'} 
                    title={"Vehicles"}
                    />
                    <Widget 
                    height={'25vh'} 
                    width={'27vw'} 
                    title={"Lodging"}
                    />
                </div>
                <div>
                    <Widget 
                    height={'30vh'} 
                    width={'60vw'} 
                    title={"Conversation"}
                    />
                </div>
            </div>
        </div>
    )
}