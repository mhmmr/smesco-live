import React from "react"

type Props = {
  className?: string
}

const Placeholder: React.FC<Props> = ({className}) => (
  <li>
    <div className={["bg-gray-200 rounded-lg", className].join(" ")} style={{height: 189}}></div>
  </li>
)

export default Placeholder