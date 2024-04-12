import style from './SearchBar.module.css'

export default function SearchBar({ query, onChange }) {
    return (
      <label >
        {/* 搜索栏: {' '} */}
        <input className={style.searchbar}
        value={query}
        onChange={onChange}
        placeholder = '搜索栏'
        />
      </label>
    );
  }