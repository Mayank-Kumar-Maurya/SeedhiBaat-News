import React from 'react'

function Card(prom) {
    return (
        <>
            <div className='m-0 p-0 col-12 col-lg-3 col-md-6  m-1 d-flex' style={{ alignItems: "center", justifyContent: "center" }}>
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title" >{prom.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">On Going</h6>
                        <pre class="card-text" style={{height:"20em", textAlign: "justify", whiteSpace: "break-spaces", fontFamily: "sans-serif"}}>{prom.text}</pre>
                        <label for="range2 " class="badge form-label text-dark">Positive View</label>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow={prom.postive} aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{width: prom.postive}}>{prom.postive}</div>
                        </div>
                       
                        <label for="range1" class="badge form-label text-dark">Negetive View</label>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow={prom.negetive} aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-danger" style={{width: prom.negetive}}>{prom.negetive}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
