import styles from './page.module.css';
import TripsGrid from '@/components/trips/trips-grid/TripsGrid';
import FilterBar from '@/components/filters/filters-bar/FiltersBar';
import { getTrips } from '@/lib/actions';
import { Suspense } from 'react';
import Link from 'next/link';
import ImageSlideShow from '@/components/ImageSlide/ImageSlide';

export default async function Home({ searchParams }: any) {
  const search = searchParams.search;
  const sortparam = searchParams.sort;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const queryParams = searchParams;

  const tripsresult = await getTrips(queryParams);

  return (
    <>
      <header className={styles.slideImage}>
        <ImageSlideShow />
      </header>
      <main className={styles.main}>
        <FilterBar />
        <Suspense
          fallback={<p className={styles.loading}>Fetching trips data...</p>}
        >
          <TripsGrid trips={tripsresult} />
        </Suspense>
        <div className={styles.controls}>
          <Link
            className={`${page <= 1 ? styles.disabled : ''}`}
            href={{
              pathname: '/',
              query: {
                ...(search ? { search } : {}),
                ...(sortparam ? { sort: sortparam } : {}),
                page: page > 1 ? page - 1 : 1,
              },
            }}
          >
            Previous
          </Link>

          <Link
            className={`${!tripsresult.next ? styles.disabled : ''}`}
            href={{
              pathname: '/',
              query: {
                ...(search ? { search } : {}),
                ...(sortparam ? { sort: sortparam } : {}),
                page: page + 1,
              },
            }}
          >
            Next
          </Link>
        </div>
      </main>
    </>
  );
}
