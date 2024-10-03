import React, {useState} from "react";

const ButtonComponent = ()=> {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <button onClick={()=> setClicked(true)} >Click</button>
            {clicked && <p>Usted dio click al boton!</p>}
        </div>
    );
}

export default ButtonComponent;