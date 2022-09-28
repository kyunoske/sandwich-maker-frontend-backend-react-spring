import {FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";

type CreateSandwichProps = {
    addSandwich: (sandwich: Sandwich) => void;
    sandwich: Sandwich;
}

export default function CreateSandwich(props: CreateSandwichProps) {

    // const emptySandwichPlaceholder: Sandwich = {
    //     id: "",
    //     name: "",
    //     patty: "",
    //     numberOfPatties: 0,
    //     grilled: false,
    //     extraWishes: ""
    // }

    const [sandwich, setSandwich] = useState(props.sandwich)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [patty, setPatty] = useState("")
    const [numberOfPatties, setNumberOfPatties] = useState(0)
    const [grilled, setGrilled] = useState(false)
    const [extraWishes, setExtraWishes] = useState("")


    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let sandwich = {
            id,
            name,
            patty,
            grilled,
            numberOfPatties,
            extraWishes
        }

        setSandwich(sandwich);
        if (sandwich) {
            props.addSandwich(sandwich);
        }
        console.log(sandwich)

    }
    /*
    * TODO: Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
    *  die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
    **/


    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/

     const [hidden, setHidden] = useState(true);

    return (
        <div>
            {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}
            {!hidden ?
            <form onSubmit={handleSubmit} style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    width: "300px"
            }}>
                <input
                name="id"
                type="text"
                placeholder="id"
                onChange={(event) => setId(event.target.value)}
                />
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    name="patty"
                    type="text"
                    placeholder="patty"
                    onChange={(e) => setPatty(e.target.value)}
                />
                <input
                    name="numberOfPatties"
                    type="number"
                    placeholder="number of patties"
                    onChange={(e) => setNumberOfPatties(e.target.valueAsNumber)}
                />
                <input
                    name="extraWashes"
                    type="text"
                    placeholder="extras"
                    onChange={(e) => setExtraWishes(e.target.value)}
                />
                <button onClick={() => props.addSandwich(props.sandwich)}>Bestellung hinzufügen</button>
                <div style={{display: "flex"}}>
                    <input
                        name="grilled"
                        type="checkbox"
                        onChange={(e) => setGrilled(e.target.checked)}
                    />
                    <p>Do you want your meat grilled? Click checkbox for yes!</p>
                </div>
            </form> : null}
            <button onClick={() => setHidden(s => !s)}>Click me to order</button>
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}