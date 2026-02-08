import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    
    
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)

    settitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start p-10 flex-col'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className='px-5 w-full py-2 border-2 rounded outline-none'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />

        <textarea
          type="input"
          placeholder='Write Details'
          className='px-5 py-2 w-full h-32 flex items-start flex-row border-2 outline-none rounded'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className='px-5 py-2 active:bg-gray-400 w-full bg-white text-black outine-none rounded'>Add Note</button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap px-5 items-start justify-start gap-6 mt-5 overflow-auto h-full'>
          {task.map(function(elem,idx){

            return <div key={idx} className="flex justify-between flex-col h-54 w-42 py-7 px-4 rounded-2xl text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] ">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3> 
                <p className='leading-tight mt-3 text-sm font-semibold text-gray-500'>{elem.details}</p>
              </ div>
              <button onClick={()=>{
                deleteNote(idx)
              }}  className=' cursor-pointer active:scale-95 w-full bg-red-500 rounded text-xs py-1 font-bold text-white' >Delete</button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App