import { AiOutlineHeart } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { CiPercent } from "react-icons/ci";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import BookInfoCarousel from "../../components/bookInfoCarousel/BookInfoCarousel";
import BookStar from "../../components/bookStar/BookStar";
import styles from "./styles.module.css";
import BtnAddToCart from "../../images/adauga-in-cos.svg";
import easyBox from "../../images/easybox-square.jpg";
import ModalEasyBox from "../../components/modal-EasyBox/ModalEasyBox";
import { useEffect, useState } from "react";
import Review from "./Review.jsx";
import axios from "axios";
import { API_URL_IMG } from "../../api/api-img";
import ReadMore from "../author-Details/readMore";
import AttributesBook from "./AttributesBook";

function BookInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await axios.get(`/api/book/${id}`);
      if (response.status === 200) {
        setBook(response.data);
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [id]);

  console.log(book);
  return (
    <>
      {!loading && (
        <main>
          <div className={styles.containerBig}>
            <div className={styles.wrap}>
              <div className={styles.carousel}>
                <BookInfoCarousel
                  badges={book.badges}
                  bookImg={book.images}
                  price={book.price}
                  name={book.title}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.detailsTitle}>
                  {book.authors &&
                    book.authors?.map((author) => (
                      <Link key={author.authorId} to={`/autor/${author.url}`}>
                        {author.name}
                      </Link>
                    ))}
                  <h1 className={styles.bookTitle}>{book.title}</h1>
                  <span className={styles.bookSubTitle}>{book.subtitle}</span>
                </div>
                <div className={styles.detailsInfo}>
                  <div className={styles.detailsInfoRating}>
                    <div className={styles.detailsInfoStar}>
                      <BookStar rating={book.rating.rating} />
                    </div>
                    <Link to={"reviews"} className={styles.detailsInfoReview}>
                      {`${
                        Number.isInteger(book.rating.rating)
                          ? book.rating.rating
                          : Number(book.rating.rating).toFixed(2)
                      } (${book.rating.totalReviews} review-uri)`}
                    </Link>
                  </div>
                  <div className="detailsInfoPrice">
                    <div className={styles.oldPrice}>
                      <span className={styles.oldPriceValue}>
                        PRP: {book.price.oldPrice} Lei
                      </span>
                      <span className={styles.oldPriceInfoWrap}>
                        <IoInformationCircleSharp />
                        <span className={styles.priceInfo}>
                          Acesta este Prețul Recomandat de Producător. Prețul de
                          vânzare al produsului este afișat mai jos.
                        </span>
                      </span>
                    </div>
                    <div className={styles.newPrice}>
                      <span className={styles.newPriceValue}>
                        {book?.price.price} Lei
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.detailsPricing}>
                  <div className={styles.detailsPricingBox}>
                    <div className={styles.detailsBonus}>
                      <div className={styles.detailsBonusText}>
                        <div
                          className={styles.textBook}
                          dangerouslySetInnerHTML={{
                            __html: book.shortDescription,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className={styles.detailsBonusSticker}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: book.promoDescription,
                        }}
                      ></div>
                      <CiPercent />
                    </div>
                  </div>
                  <div className={styles.detailsPricingBox}>
                    <div className={styles.priceButtonWrap}>
                      <Link className={styles.btnAddToCart} to="/">
                        <img src={BtnAddToCart} alt="btn-add-to-cart" />
                        <p>Adauga in cos</p>
                      </Link>
                      <button className={styles.btnFavorite}>
                        <AiOutlineHeart />
                        <p>Adaugă la favorite</p>
                      </button>
                    </div>
                    <div className={styles.infoDeliveryWrap}>
                      <div className={styles.infoDeliveryIteam}>
                        <FaPhoneAlt className={styles.iconPhone} />
                        <div className={styles.infoPhone}>
                          <p>Comanda prin telefon</p>
                          <p className={styles.pd5}>0756 111 111</p>
                        </div>
                        <span className={styles.infoProgram}>
                          <p>L-V 9:30 - 17:30</p>
                        </span>
                      </div>

                      <div className={styles.infoDeliveryIteam}>
                        <FaTruck className={styles.iconTruck} />
                        <div className={styles.infoDelivery}>
                          <p>Livrare in Romania</p>
                          <p className={styles.green}>1-3 zile lucratoare</p>
                        </div>
                      </div>
                      <ModalEasyBox
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                      />
                      <div className={styles.infoDeliveryIteam}>
                        <img
                          className={styles.easyBoxImg}
                          src={easyBox}
                          width={40}
                          height={40}
                          alt="easyBoxImg"
                        />
                        <div className={styles.infoDelivery}>
                          <p
                            className={styles.easyBox}
                            onClick={() => setIsOpen(true)}
                          >
                            Ridicare din EasyBox
                            <span>
                              <IoInformationCircleSharp />
                            </span>
                          </p>

                          <p className={styles.green}>1-3 zile lucratoare</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.devider} ${styles.marginTop}`}></div>
            <AttributesBook bookName={book.title} />
            <div className={`${styles.devider} ${styles.marginTop}`}></div>
            <div className={styles.container}>
              <div className={styles.descriptionWrap}>
                <div className={styles.description}>
                  <h2>
                    Rezumat {book.title} -
                    {book.authors.map((author) => author.name).join(", ")}
                  </h2>
                  <div className={styles.descriptionContent}>
                    <div
                      id="descriere"
                      dangerouslySetInnerHTML={{
                        __html: book.description,
                      }}
                      className={styles.descriptionText}
                    ></div>
                  </div>
                </div>
                <div className={styles.banner2}>
                  <img
                    src={
                      "https://assets.bkz.ro/upload/altele/default/banner/1782/Patrat.webp"
                    }
                    alt=""
                    width={310}
                    height={310}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.devider} ${styles.marginTop}`}></div>
            {book.authors.map((author) => (
              <div className={styles.container} key={author.authorId}>
                <h2>Despre {author.name}</h2>
                <div className={styles.authorWrap}>
                  <img
                    src={`${API_URL_IMG}/${author.imageUrl}`}
                    alt={author.name}
                    width={200}
                    height={200}
                  />
                  <div className={styles.authorDetails}>
                    <h3>Biografie</h3>
                    <ReadMore text={author.description} maxHeight={310} />
                    <Link
                      to={`/autor/${author.url}`}
                      className={styles.authorPageLink}
                    >
                      <HiArrowLongRight /> Vezi pagina autorului
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className={`${styles.devider} ${styles.marginTop}`}></div>
            <div className={styles.container}>
              <Review review={book.rating} />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default BookInfo;
