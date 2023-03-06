import React, { useState } from 'react';

function Status() {
    const [unique_id, setUnique_id] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/status/${unique_id}`);
            const json = await response.json();
            setData(json);
            console.log(json)

            if (json.status === false || !json) {
                window.alert(`Invalid Application Id - ${json.msg}`)
                console.log("invalid Application Id ")
              } else {
                console.log("success")
              }
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Application id :
                    <input
                        placeholder='Enter Application Id'
                        type="text"
                        value={unique_id}
                        onChange={(event) =>
                            setUnique_id(event.target.value)} />
                </label>
                <button id='status-button' type="submit" > Get Status </button>
            </form>

                { data && (
            <div>

                        <p>{data.message} </p>
                    
            </div>

                    )}
            

        </div>
    );
}
export default Status;



// {data && (
//     <div>
//         <h2>The status is {unique_id}:</h2>
//         <p>status{data.status}</p>
//         <p>{data.first_name}</p>
//         <p>{data.first_name}</p>

//         {/* {console.log(data)} */}
//     </div>
// )}