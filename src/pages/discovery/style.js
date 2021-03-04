import styled from 'styled-components'

export const DiscoveryWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`

export const TopMenu = styled.div`
  position: relative;
  top: -4px;
  display: flex;
  padding-left: 180px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      color: #fff;
      padding: 0 13px;
      margin: 7px 17px 0;
      &::hover, &:active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`