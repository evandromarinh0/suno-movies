import { useContext } from 'react';
import { SwiperItem } from '../SwiperItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { MovieContext } from '../../context/MovieContext';

import pinkCircleIcon from '../../assets/pink-circle.svg';

import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Container, Content } from "./styles";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function HotMovies() {
  const { hotMovies } = useContext(MovieContext);

  const width = window.screen.width;

  return(
    <Container id='home'>
      <Content>
        <div>
          <img src={pinkCircleIcon} alt="Topic"/>
          <span>LANÇAMENTOS</span> <span>DA SEMANA</span>
        </div>

        <Swiper
          spaceBetween={25}
          slidesPerView={width >= 1080 ? 4 : 1}
          width={1120}
          navigation
          pagination={{ clickable: true }}
        >
          {hotMovies.map(hotMovie => (
            <SwiperSlide key={hotMovie.id}>
              <SwiperItem movie={hotMovie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Container>
  );
}