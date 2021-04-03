import styles from './search_header.module.css'

import React from 'react';

const SearchHeader = (props) => {
  const inputRef = React.useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    query && props.onSearch(query);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <form className={styles.search} onSubmit={onSubmit}>
        <input ref={inputRef} className={styles.input} type="search" placeholder="검색" />
        <button className={styles.button} type="submit">
          <img className={styles.buttonImg} src="/images/search.png" alt="search" />
        </button>
      </form>
    </header>
  )
}

export default SearchHeader;