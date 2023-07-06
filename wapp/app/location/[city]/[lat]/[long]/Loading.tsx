import {SunIcon} from "@heroicons/react/solid"

function Loading() {
  return (
    <div className=" bg-gradient-to-br from-cyan-300 to-cyan-500 min-h-screen flex flex-col items-center justify-center">
        <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
        />
        <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">

            Loading City Weather Information

        </h1>
        <h2 className="text-xl font-bold text-center mb-10 animate-pulse">

        Hold on, we are crunching the numbers & generating an AI summary of Weather!

        </h2>
    </div>
  )
}

export default Loading