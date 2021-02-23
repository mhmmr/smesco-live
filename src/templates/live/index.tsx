import React from "react"
import { useQuery, gql } from "@apollo/client"
import { useStaticQuery, graphql } from "gatsby"
import { LiveStyled, Iframe } from "./styled"
import Footer from "components/footer"
import ProductItem from "components/product"
import { NavContent } from "containers/layout"
import Placeholder from "components/placeholder"

const Live = () => {
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

  const {data, loading} = useQuery(gql`
    query {
      allProducts {
        edges {
          node {
            store_name
            product_name
            description
            price
            featured_image
            product_url {
              ... on _ExternalLink {
                target
                _linkType
                url
              }
            }
          }
        }
      }
    }
  `, {
    onError: (err) => {
      console.log(err)
    }
  })
  return (
    <LiveStyled>
      <div className="nav-live">
        <div className="container max-w-full">
          <NavContent height={60} links={prismic && prismic.allSocial_medias.edges[0]}/>
        </div>
      </div>
      <div className="z-50">
        <div style={{height: 520}}>
          <Iframe
            src="https://www.youtube.com/embed/live_stream?channel=UC8tLzrxYWJb000rAJdwKncw"
            className="w-full h-full"
            frameborder="0" allowfullscreen></Iframe>
        </div>
      </div>
      <div className="mt-16">
        <div className="container">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {
              data && data.allProducts.edges.map(({node}) => (
                <ProductItem data={node}/>
              ))
            }
            {
              loading ? (
                <>
                  <Placeholder className="bg-gray-600"/>
                  <Placeholder className="bg-gray-600"/>
                  <Placeholder className="bg-gray-600"/>
                  <Placeholder className="bg-gray-600"/>
                  <Placeholder className="bg-gray-600"/>
                  <Placeholder className="bg-gray-600"/>
                </>
              ) : null
            }
          </ul>
        </div>
      </div>
      <Footer/>
    </LiveStyled>
  )
}

export default Live