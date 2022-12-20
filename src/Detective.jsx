import { useState } from "react"

function Detective(){
  const [sherlock, setSherlock] = useState('психопат')
  return(
    <div>
      <h2>Шерлок - {sherlock}</h2>
    </div>
  )
}
export default Detective