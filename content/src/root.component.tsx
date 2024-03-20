import { useState } from "react";

export default function Root(props: { name: string }) {

  const [counter, setCounter] = useState(0)
  return (
    <section>
      <h2>{props.name} is mounted!</h2>
      <p>{counter}</p>
      <button onClick={()=> setCounter(counter + 1)}>Increment</button>
    </section>
  )
}
