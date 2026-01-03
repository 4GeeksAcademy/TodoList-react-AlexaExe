const Perfil = ({ nombre }) => {
    return (
        <div className="bg-light shadow p-4 rounded text-center mt-4" style={{ width:"300px"}}>
            {
            nombre === "Alexandra" ? (
                <>
                <h2>Alexandra</h2>
                </>			
            ) : (
               <>
                <h2>Invitado</h2>
                </>
            )}
        </div>
    );  

        };

        // {/* PERFIL */}
				// <div className="" style={{height:"100px"}}>
				// <div className="bg-light p-3" style={{width:""}}>
				// 	<Perfil/>
				// </div>

export default Perfil;