import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='mt-20 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Non eaque quo sapiente dolorum dignissimos voluptatibus iusto consequatur optio exercitationem, 
                saepe quibusdam amet eum, accusamus quaerat. Possimus eum eius vel commodi incidunt reprehenderit ab quam. 
                Ad, culpa nam ex nemo ratione nisi voluptatum rerum sit distinctio quos reprehenderit, illo magni cum?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta qui aperiam molestiae maiores a suscipit mollitia eligendi corporis libero animi ex, 
                vel architecto voluptatibus sint eaque corrupti dolor vitae. Quod dolore similique 
                ad dolorum veniam molestias laboriosam incidunt repellat, expedita id quasi voluptates minus culpa perferendis, tempora cum! Soluta!
            </p>

        </div>
    </div> 
  )
}

export default About