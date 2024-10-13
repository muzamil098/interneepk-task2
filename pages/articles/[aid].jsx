import React from 'react'

function ArticleDetailPage(props) {
  return (
    <div className=' md:h-screen md:flex md:justify-center md:items-center'>
        <div className='md:h-full bg-green-700 px-4 text-white font-bold flex items-center justify-center'>
        <h1 className='text-6xl'>Post Detail page <br /> With Dynamic Routing</h1>
        </div>
        <div className='px-2'>
            <h3 className='text-2xl font-bold text-green-700'>Detail</h3>
            <h2 className='text-xl font-bold'>This is title</h2>
            <p>{props.postDetail.body}</p>
        </div>
    </div>
  )
}

export default ArticleDetailPage;

export async function getStaticPaths(context){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();
    const paths = data.map((posts) => ({params: {aid: posts.id.toString()}}))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const {aid} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${aid}`)
    const data = await response.json();
    console.log(data)
    return {
        props: {
            postDetail: data
        }
    }

}