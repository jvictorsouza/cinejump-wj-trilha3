import { StrObjectAny } from 'interfaces'
import { RenderAToast } from 'helpers/toast'

const searchTrailer = async (title: string) => {
  var search = require('youtube-search')
  let headers = {
    maxResults: 1,
    key: `${process.env.REACT_APP_API_GOOGLE_YOUTUBE_V3}`
  }
  await search(
    `${title} Official Trailer (HD)`,
    headers,
    function (error: any, results: Array<StrObjectAny>) {
      if (error) {
        let errorCode = error.message.split(' ').slice(-1)[0]
        if (process.env.API_GOOGLE_YOUTUBE_V3 === '') {
          RenderAToast('error', 'Youtube API - Empty token')
        } else if (errorCode === '403') {
          RenderAToast('error', 'Youtube API - Exceeded requisition quota')
        } else if (errorCode === '400') {
          RenderAToast('error', 'Youtube API - Invalid token')
        }
      } else {
        window.open(`${results[0].link}`, '_blank')
      }
    }
  )
}

export { searchTrailer }
