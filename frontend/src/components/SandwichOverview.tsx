import SandwichDetails from "./SandwichDetails";
import {Sandwich} from "../model/Sandwich";
import "./SandwichOverview.css"

type SandwichOverviewProps = {
    sandwiches : Sandwich[];
    deleteSandwich : (id: string) => void;
}

export default function SandwichOverview(props : SandwichOverviewProps){

    let hasSandwich: boolean = props.sandwiches.length > 0;

    return (

        <div>
        {hasSandwich ?
        <div className="menu-list">
            {props.sandwiches.map((sandwich) =>
                <SandwichDetails key={sandwich.id} sandwich={sandwich} deleteSandwich={props.deleteSandwich} /> ) }
        </div>
                : props.sandwiches.length === 0 && <h3>Please order your sandwich!</h3>}
        </div>
    )

}