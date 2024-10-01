// import styles from './Search.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
export interface ISearch {}

const Search: React.FC = () => {
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
  }, [searchQuery]);

  return (
    <input
      type="text"
      name="search"
      onChange={(e) => setSearchText(e.target.value)}
      defaultValue={search}
    />
  );
};

export default Search;
