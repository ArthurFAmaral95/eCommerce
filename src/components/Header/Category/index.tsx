import axios from 'axios'

import { Link } from 'react-router-dom'

import './styles.css'

type CategoryProps = {
  category: string
}

export function Category(props: CategoryProps) {
  async function fetchCategory() {
    axios
      .get(`http://localhost:4001/${props.category}`)
      .then(response => console.log(response.data))
      .catch(err => console.error(err))
  }

  return (
    <>
      <li>
        <Link to="/test">{props.category}</Link>
        {/* <a
          href={`/${props.category}`}
          onClick={fetchCategory}
          target="blank"
        ></a> */}
      </li>
    </>
  )
}
