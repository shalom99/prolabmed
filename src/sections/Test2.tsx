'use client'
import { useCounter } from '@/store/useCounterStore'
import { FC } from 'react'

type TestProps = {
  
}

const Test2: FC<TestProps> = ({}) => {
  const {count, increaseCount} = useCounter()


  return (
    <div className='w-screen h-screen'>Test
      <p>Counter: {count}</p>
      <button type="button" onClick={() => increaseCount(2) }> Increase Counter</button>
    </div>
)
}

export default Test2