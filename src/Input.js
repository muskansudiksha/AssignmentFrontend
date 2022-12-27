import React from 'react'

const Input = (array) => {

    const [month, setMonth] = React.useState(array);

    React.useEffect(() => {
        setMonth(array);
    }, [array]);

    console.log(array);

    return (
        <>
        {/* {
            month && month?.map((m) => {
                return (
                    <div className="input-group mb-3" key={m}>
                        <span className="input-group-text" id="inputGroup-sizing-default">{m}</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                );
            })
        } */}
        </>
    )
}

export default Input