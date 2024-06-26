import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Book from "../Book/Book";

function SwiperBooks({ title, viewBook, books }) {
  return (
    <>
      {title && (
        <div>
          <h2 className={styles.SwiperBooksTitle}>{title}</h2>
        </div>
      )}

      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          modifierClass: `swiper-pagination-wrap`,
          bulletClass: `swiper-pagination-bullet ${styles[`costum-bullet`]}`,
        }}
        mousewheel={true}
        slidesPerView={viewBook}
        spaceBetween={10}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={`${styles.mySwiper}`}
      >
        {books &&
          books?.length > 0 &&
          books.map((book) => (
            <SwiperSlide key={book._id}>
              <Book {...book} />
            </SwiperSlide>
          ))}

        <div
          className={`swiper-button-prev sw-prev ${styles.swPrevBook}`}
        ></div>
        <div
          className={`swiper-button-next sw-next ${styles.swNextBook}`}
        ></div>
      </Swiper>
    </>
  );
}

export default SwiperBooks;
