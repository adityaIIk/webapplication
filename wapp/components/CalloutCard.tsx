'use client'

import { CheckCircleIcon,ExclamationIcon } from "@heroicons/react/solid"
import { Callout } from "@tremor/react"

type Props = {
    message: string;
    warning?:boolean;
}

function CalloutCard  ({message,warning}:Props)  {
  return (
    <Callout
            className="mt-4"
            title={message}
            color={warning ? "rose" : "teal"} 
            icon = {warning ? ExclamationIcon : CheckCircleIcon}
            
    />
  )
}

export default CalloutCard
