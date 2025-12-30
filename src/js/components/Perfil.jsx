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
                    <h2></h2>
                    <p></p>
                </div>
            )}
        </div>
    );  

        };

export default Perfil;