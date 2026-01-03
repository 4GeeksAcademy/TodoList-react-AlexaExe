import { useState } from "react";


const Perfil = () => {
 const [nombre, setNombre] = useState("");   
 
    return (
        <div className="container-fluid bg-success-subtle text-success-emphasis" style={{ padding: "0px", margin:"auto"}}>
           <h2 className="mb-4">
            {nombre ==="Alexandra" ? `Bienvenida Alex✨` : `Invitad@ ${nombre || ""}`}
           </h2>
                   
            <input type="text"
                className="inputs"
             	placeholder="Escribe tu nombre o Alexandra"
            	value={nombre}
             	onChange={(e) => setNombre(e.target.value)}
            />
            
            {nombre ==="Alexandra" && (
                <img 
                src="src/img/img-perfil-Alex.jpeg"
                alt="img-perfil-Alex"
                className="img-perfil-Alex" 
                />

            )}

        
        </div>
    );  

        };

export default Perfil;
