import React from 'react'

interface TsBasicsProps {
 basics: string[];
}

function TsBasics({basics}: TsBasicsProps) {

  const [basicsTotal, setBasicsTotal] = React.useState(0);
  React.useEffect(() => {
    setBasicsTotal(basics.length)
  },[])

  return  (
  <div>
    <h1>Conceptos basicos de TypeScript</h1>
    <h4>Total:{basicsTotal}</h4>
    <ul>
      {basics.map((basics) =>(
        <li key={basics}>{basics}</li>
      ))}
    </ul>
  </div>
  )
}
export default TsBasics;