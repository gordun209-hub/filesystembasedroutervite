import { useParams } from 'react-router'

export default function Dynamic() {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1>Dynamic {params.id}</h1>
    </div>
  )
}
