import './styles.css'

type ImagePath = {
  imgPath: string
}

export function Place(props: ImagePath) {
  return (
    <div className="place">
      <img src={props.imgPath} alt="location" />
      <div className="place-texts">
        <span>Delivery will be done in Belo Horizonte</span>
        <span>Update place</span>
      </div>
    </div>
  )
}
