import React from 'react';

function Hello(props: { age: number, name: string, increment: number }) {
  return (
    <div>
    {/* {myState} */}
    { props.age && props.name &&
        <div> 
            <h3>Age is {sum(props.age, props.increment)} </h3>
            <h1>From Hello Component and props is {props.name}</h1>
        </div>
    }
</div>
  );
}

let sum = (a: number, b: number)=> {
    return (a + b);
}

export default Hello;