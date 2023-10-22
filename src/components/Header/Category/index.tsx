import './styles.css'

type CategoryProps = {
  category: string
}

export function Category(props: CategoryProps) {
  return <li>{props.category}</li>
}
