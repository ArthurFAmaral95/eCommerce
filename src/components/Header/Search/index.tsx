import './styles.css'

export function Search() {
  return (
    <div className="search">
      <form action="" method="get">
        <input
          type="text"
          id="search-product"
          name="search-product"
          placeholder="Search product"
        />
        <button>
          <img src="../../../public/search.svg" alt="Search" />
        </button>
      </form>
    </div>
  )
}
