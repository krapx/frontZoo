import "./draft.css"

const Draft = () => {
    return (
        <div className="draft">
            <div className="draft__header">
                <img className="draft__img"
                     src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                     alt="teacher"/>
                Professor
            </div>
            <div className="draft__body">
                <p className="draft__description">Cliquer sur l'animal de votre choix</p>
                <div className="draft__choices">
                    <a href="/game">
                        <img className="draft__img selectable"
                             src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                             alt="fox"/>
                    </a>
                    <a href="/game">
                        <img className="draft__img selectable"
                             src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                             alt="tiger"/>
                    </a>
                    <a href="/game">
                        <img className="draft__img selectable"
                             src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                             alt="turtle"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Draft