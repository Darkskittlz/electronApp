import React from 'react'

const Meetings = () => {
  return (
    <>
      <div className="flex max-h-full flex-col w-full mt-5">
        <div className="z-50 w-full pb-6 p-3 rounded-lg bg-white flex justify-center dark:bg-blur dark:border">
          <h1 className="mt-5 text-black text-center dark:text-white">Create Meet Invite</h1>
        </div>
        <div className="z-50 pb-5 mr-8 mt-5 w-full h-40 rounded-lg bg-white flex justify-center dark:bg-blur dark:border">
          <h1 className="mt-5 text-black underline dark:text-white">Upcoming Events/Meetings</h1>

        </div>
      </div>
    </>
  )
}

export default Meetings