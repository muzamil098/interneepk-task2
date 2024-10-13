import PostContext from '@/store/store-context'
import React, { useContext } from 'react'

function PostCard( props ) {
  return (
    <div className='mx-auto shadow-lg  w-[20rem] h-[15rem] overflow-hidden p-2 md:mx-4'>
        <h1 className='text-xl font-bold text-green-700'>{props.title}</h1>
        <div>{props.body}</div>
    </div>
  )
}

export default PostCard