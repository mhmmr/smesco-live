import styled from "styled-components"

export const HomeStyled = styled.div`
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
      &:hover {
        .gatsby-image-wrapper {
          transform: scale(1);
        }
        .play {
          transform: scale(1.2);
        }
      }
      .gatsby-image-wrapper {
        transition: all 1s ease;
        transform: scale(1.1);
        &:after {
          left: 0;
          right: 0;
          position: absolute;
          bottom: 0;
          top: 0;
          content: " ";
          background: rgba(0, 0, 0, .5);
          z-index: 1;
        }
      }
      &:after {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
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