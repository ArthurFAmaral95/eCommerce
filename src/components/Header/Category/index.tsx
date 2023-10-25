import './styles.css'

type CategoryProps = {
  category: string
}

export function Category(props: CategoryProps) {
  return (
    <>
      <li>
        <a href={`/${props.category}`}>{props.category}</a>
      </li>
    </>
  )
}
