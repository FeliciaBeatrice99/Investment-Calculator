
export default function Userinput({initialValue, changeValue}) {
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Intial Inverstment</label>
                    <input type="number" value={initialValue.initialInvestment} onChange={(event) => changeValue('initialInvestment', event.target.value)} required/>
                </p>
                <p>
                    <label >Annual Inverstment</label>
                    <input type="number" value={initialValue.annualInvestment} onChange={(event) => changeValue('annualInvestment', event.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input type="number" value={initialValue.expectedReturn} onChange={(event) => changeValue('expectedReturn', event.target.value)} required/>
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" value={initialValue.duration} onChange={(event) => changeValue('duration', event.target.value)} required/>
                </p>
            </div>
        </section>


    )
}