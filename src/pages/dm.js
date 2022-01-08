import { useParams } from "react-router-dom"

const DM = () => {
  let params = useParams()

  return(
    <div>
      partnerId : {params.partnerId}
    </div>
  )
}

export default DM