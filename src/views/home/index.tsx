import { FavoritesTypeID, getFavorites, updateFavorites } from 'apis/cinejump'
import {
  getMovie,
  getPlayingMovies,
  getPopularMovies,
  getRecomendationsMovies,
  getTopMovies
} from 'apis/tmdb'
import { searchTrailer } from 'apis/youtube'
import CircularLoading from 'components/CircularLoading'
import { Assets } from 'helpers/assets'
import { StrObjectAny, StrObjectStr } from 'interfaces'
import React, { useEffect, useState } from 'react'
import {
  ContentHighlightsStyled,
  ContentRowStyled,
  ContentStyled,
  HeartFavoritesStyled,
  ImageCardStyled,
  LayoutHighlightsStyled,
  LayoutRowStyled,
  LayoutStyled,
  MainHighlightStyled,
  PlayVideoStyled,
  SecondaryHighlightStyled,
  TrailerCardStyled
} from './styles'

const Home: React.FC = (...props) => {
  const [circularLoading, setCircularLoading] = useState<boolean>(true)
  const [popularsMovies, setPopularsMovies] = useState<Array<StrObjectAny>>([])
  const [playingMovies, setPlayingMovies] = useState<Array<StrObjectAny>>([])
  const [topMovies, setTopMovies] = useState<Array<StrObjectAny>>([])
  const [recomendationsMovies, setRecomendationsMovies] = useState<Array<StrObjectAny>>(
    []
  )
  const [favoritesMovies, setFavoritesMovies] = useState<Array<StrObjectAny>>([])

  useEffect(() => {
    getPopularMovies().then((data: StrObjectAny) => {
      if (data) {
        setPopularsMovies(data.results)
        getRecomendationsMovies(data.results[0].id).then((data: StrObjectAny) => {
          if (data) setRecomendationsMovies(data.results)
        })
      }
    })
    getPlayingMovies().then((data: StrObjectAny) => {
      if (data) setPlayingMovies(data.results)
    })
    getTopMovies().then((data: StrObjectAny) => {
      if (data) setTopMovies(data.results)
    })
    getFavorites().then((data: Array<StrObjectAny>) => {
      if (data && data.length > 0) {
        let favoritesTMDBDataLoaded: Array<StrObjectAny> = []
        data.forEach((favorite: StrObjectStr, index: number) => {
          let movieDetails = getMovie(favorite.entity_id)
          movieDetails.then((details: StrObjectAny) => {
            favoritesTMDBDataLoaded.push({
              original_title: details.original_title,
              poster_path: details.poster_path,
              id: details.id
            })
            if (index === data.length - 1) {
              setFavoritesMovies(favoritesTMDBDataLoaded)
              setCircularLoading(false)
            }
          })
        })
      }
    })
  }, [])

  const renderHighlights = () => {
    const verifyOverviewSize = (overview: string) => {
      if (overview.length <= 265) {
        return overview
      } else {
        return `${overview.slice(0, 260)}...`
      }
    }
    const renderMainHighlight = (movie: StrObjectAny) => {
      return (
        <MainHighlightStyled>
          <img
            alt="MainHighlight"
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w780${movie.backdrop_path}`}
          />
          <div id="main-highlights-banner-info">
            <span>{movie.title}</span>
            <label>{verifyOverviewSize(movie.overview)}</label>
          </div>
        </MainHighlightStyled>
      )
    }

    const renderSecondaryHighlight = (movie: StrObjectAny) => {
      return (
        <div title={`${movie.overview}`}>
          <img
            alt="SecondaryHighlight"
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w300${movie.backdrop_path}`}
          />
          <div id="secondary-highlights-banners-info">
            <span>{movie.title}</span>
          </div>
        </div>
      )
    }
    return (
      <LayoutHighlightsStyled>
        {recomendationsMovies.length >= 3 ? (
          <ContentHighlightsStyled>
            {renderMainHighlight(recomendationsMovies[0])}
            <SecondaryHighlightStyled>
              {renderSecondaryHighlight(recomendationsMovies[1])}
              {renderSecondaryHighlight(recomendationsMovies[2])}
            </SecondaryHighlightStyled>
          </ContentHighlightsStyled>
        ) : null}
      </LayoutHighlightsStyled>
    )
  }

  const verifyOnFavorites = (id: number) =>
    favoritesMovies.find((favorite: StrObjectAny) => favorite.id === id)

  const iterationOnFavorites = (movie: StrObjectAny) => {
    let { id, original_title, poster_path } = movie
    updateFavorites({ entity_id: id, type_id: FavoritesTypeID.movie })
    let newFavorites = []
    if (verifyOnFavorites(id)) {
      newFavorites = favoritesMovies.filter(
        (favorite: StrObjectStr) => favorite.id !== id
      )
    } else {
      newFavorites = [...favoritesMovies]
      newFavorites.push({ original_title, poster_path, id })
    }
    setFavoritesMovies(newFavorites)
  }

  const renderMoviesRow = (
    data: Array<StrObjectAny>,
    title: string,
    rowId: string,
    addingInfoLabel?: string
  ) => {
    return (
      <div id="pre-layout-home-row">
        <LayoutRowStyled>
          <ContentRowStyled>
            <span>{title}</span>
            <div>
              {data.map((movie: StrObjectAny, index: number) => {
                return (
                  <ImageCardStyled
                    key={`${rowId}-image-card-${index}`}
                    title={
                      (addingInfoLabel &&
                        `${movie.original_title}: ${movie[addingInfoLabel]}`) ||
                      `${movie.original_title}`
                    }
                    urlImage={`${process.env.REACT_APP_IMAGE_BASE_URL}/w185${movie.poster_path}`}
                  >
                    <HeartFavoritesStyled
                      key={`${rowId}-heart-image-card-${index}`}
                      id={`${movie.original_title}|${movie.poster_path}-heart`}
                      src={
                        verifyOnFavorites(movie.id)
                          ? 'assets/images/BsHeartFill-red.svg'
                          : 'assets/images/BsHeartFill-black.svg'
                      }
                      onClick={() => iterationOnFavorites(movie)}
                    />
                  </ImageCardStyled>
                )
              })}
            </div>
          </ContentRowStyled>
        </LayoutRowStyled>
      </div>
    )
  }

  const renderTrailersRow = (
    data: StrObjectAny,
    title: string,
    addingInfoLabel?: string
  ) => {
    return (
      <div id="pre-layout-home-row">
        <LayoutRowStyled>
          <ContentRowStyled>
            <span>{title}</span>
            <div>
              {data.map((movie: StrObjectAny, index: number) => {
                return (
                  <TrailerCardStyled
                    key={`trailer-image-card-${index}`}
                    title={
                      (addingInfoLabel &&
                        `${movie.original_title}: ${movie[addingInfoLabel]}`) ||
                      `${movie.original_title}`
                    }
                    urlImage={`${process.env.REACT_APP_IMAGE_BASE_URL}/w500${movie.backdrop_path}`}
                  >
                    <PlayVideoStyled
                      key={`trailer-play-image-card-${index}`}
                      id={`${movie.original_title}|${movie.poster_path}-heart-poppulars`}
                      src={Assets('assets/images/FiPlay.svg')}
                      onClick={() => searchTrailer(`${movie.original_title}`)}
                    />
                  </TrailerCardStyled>
                )
              })}
            </div>
          </ContentRowStyled>
        </LayoutRowStyled>
      </div>
    )
  }

  return (
    <LayoutStyled>
      {circularLoading ? (
        <CircularLoading />
      ) : (
        <ContentStyled>
          {renderHighlights()}
          {renderMoviesRow(popularsMovies, 'Populares', 'populars')}
          {renderMoviesRow(playingMovies, 'Em Exibição', 'playing')}
          {renderTrailersRow(popularsMovies, 'Trailers')}
          {renderMoviesRow(topMovies, 'Top Filmes', 'top', 'vote_average')}
          {favoritesMovies && favoritesMovies.length > 0
            ? renderMoviesRow(favoritesMovies, 'Favoritos', 'favorites')
            : null}
        </ContentStyled>
      )}
    </LayoutStyled>
  )
}

export default Home
