
import List from '../components/List'
import Card from '../components/Card'
import { useState } from 'react'

const todo = [
  {
    text: 'nextjs',
    id: 'todo-task-1'
  },
  {
    text: 'react native',
    id: 'todo-task-2'
  },
  {
    text: 'react aws',
    id: 'todo-task-3'
  }
]
const progress = [  ]
  const done = [  ]

export default function Board () {
    const [listOfLists, setListOfLists] = useState({ todo, progress, done})
    const [dragged, setDragged] = useState(null)

    const handleDrop = (event) => {
        event.preventDefault()
        const list = event.currentTarget.dataset.list
        const listOflistsClone = structuredClone(listOfLists)
        const newList = listOflistsClone[dragged.list].filter( item => item.id !== dragged.data.id)
        listOflistsClone[dragged.list] = newList
        listOflistsClone[list].push(dragged.data)
        setListOfLists(listOflistsClone)

      }

  return (
    <>
      <div className="p-4">
      <p className="text-3xl font-bold mb-4"> Development</p>
      <main className='flex justify-between gap-4'>
        <List id="todo" name="TODO" handleDrop={handleDrop}>
          { listOfLists.todo.map((item, index)=>(
            <Card list="todo" setDragged={setDragged} key={item.id}{...item}/>
          ))}
        </List>
        <List id="progress" name="In Progress" handleDrop={handleDrop}>
          { listOfLists.progress.map((item, index)=>(
            <Card list="progress" setDragged={setDragged} key={item.id}{...item}/>
          ))}
        </List>
        <List id="done" name="Done" handleDrop={handleDrop}>
          { listOfLists.done.map((item, index)=>(
            <Card list="done" setDragged={setDragged} key={item.id}{...item}/>
          ))}
        </List>
      </main>
      </div>
    </>
  )
}
