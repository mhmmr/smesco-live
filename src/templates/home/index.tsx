import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useQuery, gql } from "@apollo/client"
import { RichText } from 'prismic-reactjs'
import { FaPlay } from "react-icons/fa"
import { HomeStyled } from "./styled"
import Footer from "components/footer"
import ProductItem from "components/product"
import Placeholder from "components/placeholder"

const OfflineComponent = () => {
  return (
    <div>
      test
    </div>
  )
}

const Home = () => {
  const { prismic: gData } = useStaticQuery(graphql`
    query {
      prismic {
        allBanners {
          edges {
            node {
              title
              description
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
  
  const nodes = gData && gData.allBanners.edges
  const heroTitle = nodes ? nodes[0].node.title : "Live Kit"
  const heroDesc = nodes ? nodes[0].node.description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  
  return (
    <HomeStyled>
      <div className="relative pb-20">
        <div className="container">
          <div className="flex banner">
            <div className="pt-11 sm:pt-20 sm:w-1/2">
              <h1 className="text-3xl sm:text-5xl font-black">{RichText.asText(heroTitle)}</h1>
              <p className="mt-2 sm:mt-6 leading-snug text-gray-500 sm:text-3xl text-lg">{RichText.asText(heroDesc)}</p>
            </div>
            <div className="hidden sm:block illustration w-1/2">
              <StaticImage src="../../images/illustration.png" placeholder="blurred" alt=""/>
            </div>
          </div>
        </div>
        <div className="left-blob blobs left-0 bottom-0 absolute">
          <StaticImage src="../../images/v-left.png" placeholder="tracedSVG" layout="fullWidth" alt=""/>
        </div>
        <div className="right-blob blobs right-0 bottom-0 absolute">
          <StaticImage src="../../images/v-right.png" placeholder="tracedSVG" layout="fullWidth" alt=""/>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="live-video-wrapper relative z-10">
            <ul className="flex items-center -mx-1 mb-2">
              <li className="px-1">
                <StaticImage src="../../images/kementrian.png" placeholder="blurred" alt=""/>
              </li>
              <li className="px-1">
                <StaticImage src="../../images/smeco.png" placeholder="blurred" alt=""/>
              </li>
              <li className="px-1">
                <StaticImage src="../../images/gojek.png" placeholder="blurred" alt=""/>
              </li>
              <li className="px-1">
                <StaticImage src="../../images/bb.png" placeholder="blurred" alt=""/>
              </li>
              <li className="px-1">
                <StaticImage src="../../images/byanakbangsa.png" placeholder="blurred" alt=""/>
              </li>
            </ul>
           <Link to="/live" className="rounded-xl focus:outline-none shadow block overflow-hidden relative">
              <div className="live-video relative flex justify-center items-center">
                <StaticImage className="w-full transition-all duration-1000 object-cover h-full absolute" placeholder="blurred" src="../../images/livebg.png" alt=""/>
                <div className="absolute play transition-all duration-1000" style={{zIndex: 1}}>
                  <FaPlay size={100} color="#fff"/>
                </div>
                {/* <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=UC8tLzrxYWJb000rAJdwKncw"
                  className="w-full h-full"
                  frameborder="0" allowfullscreen></iframe> */}
                {/* <ReactLivestream platform="youtube" youtubeApiKey="AIzaSyBQUGoAI9wzi002U11ZLYDVgVKRBNIdrOo" youtubeChannelId="UC8tLzrxYWJb000rAJdwKncw" offlineComponent={OfflineComponent}/> */}
              </div>
            </Link>
          </div>
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
                  <Placeholder/>
                  <Placeholder/>
                  <Placeholder/>
                  <Placeholder/>
                  <Placeholder/>
                  <Placeholder/>
                </>
              ) : null
            }
          </ul>
        </div>
      </div>
      <Footer/>
    </HomeStyled>
  )
}

export default Home