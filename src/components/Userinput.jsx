
export default function Userinput({initialValue, changeValue}) {
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Intial Inverstment</label>
                    <input type="number" value={initialValue.intialInverstment} onChange={(event) => changeValue('intialInverstment', event.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="">Annual Inverstment</label>
                    <input type="number" value={initialValue.annualInverstment} onChange={(event) => changeValue('annualInverstment', event.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" value={initialValue.expectedReturn} onChange={(event) => changeValue('expectedReturn', event.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" value={initialValue.duration} onChange={(event) => changeValue('duration', event.target.value)} required/>
                </p>
            </div>
        </section>


    )
}