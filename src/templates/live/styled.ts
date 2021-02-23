import styled from "styled-components"

export const Iframe = styled.iframe`
  .ytp-show-cards-title {
    display: none;
  }
`

export const LiveStyled = styled.div`
  .banner {
    height: 300px;
    @media (min-width: 640px) {
      height: 540px;
    }
    .illustration {
      z-index: 1;
    }
  }

  .live-video-wrapper {
    margin-top: -150px;
    @media (min-width: 640px) {
      margin-top: -${639/2}px;
    }
    .live-video {
      height: 200px;
      @media (min-width: 640px) {
        height: var(--liveVideoHeight);
      }
    }
  }

  .blobs {
    width: 30%;
    max-width: 30%;
    &.left-blob {
    }
    &.right-blob {
      img {
        margin-left: auto;
      }
    }
  }
`