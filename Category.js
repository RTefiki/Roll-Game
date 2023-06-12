import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'

export default function Category() {

  const [dice, setDice] = React.useState(allNewDice());


  function generateNewDie() {
    return {value: Math.ceil(Math.random() * 6), 
    isHeld: false,
    id: nanoid()
    }
  }

   function allNewDice() {

    const newDice = []
    for (let i = 0; i < 10; i++) {
   newDice.push(generateNewDie())
    }
    return newDice
   }
  
    const elementDice = dice.map( die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

    function handleChange() {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie() 
      }))
    }

  
    function holdDice( id) {
      setDice(oldDice => oldDice.map(die => {
       return die.id === id ? {...die, isHeld: !die.isHeld} : die
      }))

    }
   
   return (
    <div className='w-full h-[500px] bg-slate-500 p-2 text-center flex item-center justify-center '>
     <div className='w-[400px] h-[400px] bg-white m-4 p-2 rounded-md'>
          <div>
               <h1 className='text-4xl font-bold mt-4'>Find the same numbers.</h1>
               <p className='mt-2'>Click on the number to select the same number, and click the roll as soon as you want to get new numbers out.</p>
          </div>

              <button  className='gap-2 grid grid-cols-5 bg-white '>
                {elementDice}
                </button>
         
          <button onClick={handleChange} className='mt-2  bg-blue-500 hover:bg-blue-400 cursor-pointer '> Roll</button>
     </div>
    </div>
  )
}
