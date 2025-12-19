const Perfil = ({ nombre }) => {
    return (
        <div>
            {nombre === "Alexandra" ? (
                <div className="tarjeta-perfil">
                    <h2>gfg</h2>
                    <p>fdd</p>
                </div>
            
            ) : (
                <div className="tarjeta-perfil">
                    <h2>Holas</h2>
                    <p>ffgdg</p>
                </div>
            )}
        </div>
    );  

        };

export default Perfil;