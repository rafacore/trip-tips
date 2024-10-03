'use client';
import styles from './FiltersBar.module.css';
import Search from '@/components/filters/search/Search';
import Sort from '../sort/Sort';
export interface IFilterBar {}

const FilterBar: React.FC = () => {
  return (
    <>
      <div className={styles.content}>
        <Search placeholder="search by" />
        <Sort sortByLabel="sort by check-in date " />
      </div>
    </>
  );
};

export default FilterBar;
