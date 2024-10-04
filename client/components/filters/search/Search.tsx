 import styles from './Search.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export interface ISearch {
  placeholder: string;
}

const Search: React.FC<ISearch> = ({placeholder}) => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search')?.toString();
  const [searchText, setSearchText] = useState(search);
  const [searchQuery] = useDebounce(searchText, 500);

  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const searchtparams = new URLSearchParams(searchParams);
    if (!searchQuery) {
      searchtparams.delete('search');
    } else {
      searchtparams.set('search', searchQuery);
    }
    replace(`${pathname}?${searchtparams.toString()}`);
  }, [searchQuery, searchParams, pathname]);

  return (
    <input
    className={styles.input}
      type="text"
      name="search"
      onChange={(e) => setSearchText(e.target.value)}
      defaultValue={search}
      placeholder={placeholder}
    />
  );
};

export default Search;
