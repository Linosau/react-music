import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getTopBannerAction
} from './store/actionCreators'

export default memo(function Recommand (props) {
  const { topBanner } = useSelector(state => ({
    topBanner: state.recommend.topBanner
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
    Recommand { topBanner.length }
    </div>
  )
})

// function Recommand (props) {
//   const { topBanner, getBanner } = props

//   useEffect(() => {
//     getBanner()
//   }, [getBanner])

//   return (
//     <div>
//     Recommand {topBanner.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanner: state.recommend.topBanner
// })

// const mapDispatchToProps = dispatch => ({
//   getBanner: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommand))
