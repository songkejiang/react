import styled from 'styled-components'

export const HeaderWraper = styled.div`
    height:56px;
    position:relative;
    border-bottom:1px solid #f0f0f0
`

export const Logo = styled.a.attrs(
    {href:'/'}
)`
    position: absolute;
    height:56px;
    top: 0;
    left: 0;
    width:100px;
    display:inline-block;
    background:url(//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png);
    background-size: contain
`

export const Nav = styled.div`
    height:56px;
    width:960px;
    margin:0 auto;
    // background:#ccc
`

export const NavItem = styled.div`
    &.left {
        float: left
    }
    &.right {
        float: right
    }
    &.active {
        color:#ea6f5a
    }
    padding: 15px;
    height: 56px;
    line-height:26px
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  border:none;
  outline:none;
  width:160px;
  height:38px;
  border-radius:19px;
  padding: 0 20px;
  margin-top:9px;
  box-sizing:border-box;
  font-size:14px;
  background:#eee;
  &::placeholder{
      color:#999
  }
  &.focused{
      width:240px
  }
  &.slide-enter,&.slide-exit {
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
     width:240px
  }
  &.slide-exit-active{
    width:160px
  }
`

export const Addition = styled.div`
float:right

`

export const Button = styled.div`
  width:80px;
  float:left;
  height:56px;
  line-height:56px;
`

export const SearchWraper=styled.div`
//   background:red;
  float:left;
  height:56px;
  line-height:56px;
  .iconfont{
      position:relative;
      left:-30px;
      border-radius:50%;
    //   background:#ccc;
      padding:5px;
      &.focused{
          background:#ccc;
          color:#fff;
      }
  }
`