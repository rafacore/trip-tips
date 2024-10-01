import { useState, useEffect } from 'react';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export interface ISort {
  sortByLabel: string;
}

const Sort: React.FC<ISort> = ({ sortByLabel }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState('');

  useEffect(() => {
    const sortparams = new URLSearchParams(searchParams);
    if (!sort) {
      sortparams.delete('sort');
    } else {
      sortparams.set('sort', sort);
    }

    replace(`${pathname}?${sortparams.toString()}`);
  }, [sort]);
  return (
    <>
      <div>
        <label>{sortByLabel}</label>
        <select name="sort" onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </>
  );
};

export default Sort;
