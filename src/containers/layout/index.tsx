import React from "react"
import SEO from "components/seo"
import { Link  } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { RichText, Link as PLink } from 'prismic-reactjs'
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { LayoutType } from "types"
import styled from "styled-components"

const NavStyled = styled.nav`
  .nav-flex {
    height: 74px;
  }
`

type NavContentPropType = {
  height?: string,
  links?: {},
}

export const NavContent: React.FC<NavContentPropType> = ({height, links}) => {
  const networks = links.node.networks
  return (
    <div className="flex justify-between nav-flex items-center" style={{height}}>
      <div>
        <div>
          <Link to="/">
            <StaticImage src="../../images/logo-live.png" placeholder="blurred" height={28} alt="" style={{verticalAlign: "middle"}}/>
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex -mx-2">
          <li className="px-2 text-blue-600">
            <a href={PLink.url(networks[0].url)}>
              <FaFacebook/>
            </a>
          </li>
          <li className="px-2 text-red-500">
            <a href={PLink.url(networks[1].url)}>
              <FaYoutube/>
            </a>
          </li>
          <li className="px-2 text-pink-600">
            <a href={PLink.url(networks[2].url)}>
              <FaInstagram/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Layout: React.FC<LayoutType> = ({children}) => {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        allSocial_medias {
          edges {
            node {
              networks {
                url {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                title
                image1
                image1Sharp {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  
  return (
    <>
      <SEO/>
      <NavStyled className="navigation">
        <div className="container">
          <NavContent links={prismic && prismic.allSocial_medias.edges[0]}/>
        </div>
      </NavStyled>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout