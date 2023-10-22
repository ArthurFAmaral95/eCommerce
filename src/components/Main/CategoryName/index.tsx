import './styles.css'

type CategoryNameProps = {
  category: string
}

export function CategoryName(props: CategoryNameProps) {
  return <h3 className="category-name">{props.category}</h3>
}
