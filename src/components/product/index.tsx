import React from "react"
import * as Dialog from "@radix-ui/react-dialog";
import { BsXCircleFill, BsBoxArrowInUpRight } from "react-icons/bs"
import { RichText } from 'prismic-reactjs'
import { StyledOverlay, StyledContent, DialogContentStyled, ProductItemStyled } from "./styled"
import StoreProfile from "components/store-profile"

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20},
  transition: { duration: 2 }
}

const ProductItem = ({data}) => {
  return (
    <ProductItemStyled style={{height: 189}} className="product-item">
      <Dialog.Root>
        <Dialog.Trigger className="w-full">
          <div className="product-item-inner text-white relative rounded-xl overflow-hidden focus:outline-none">
            <div className="w-full transition-all duration-1000 object-cover h-full absolute">
              <img className="w-full transition-all duration-1000 object-cover h-full absolute" src={data.featured_image.url} alt=""/>
            </div>
            <div className="p-4 flex flex-col h-full relative z-10" style={{height: 180}}>
              <div className="flex-basis">
                <StoreProfile name={RichText.asText(data.store_name)}/>
              </div>
              <div className="font-extrabold text-left">
                <span>{RichText.asText(data.product_name)}</span>
              </div>
            </div>
          </div>
        </Dialog.Trigger>
        <StyledOverlay />
          <DialogContentStyled>
            <StyledContent 
              initial="hidden"
              animate="visible"
              variants={variants}
              className="rounded-xl overflow-hidden dialog-content"  style={{maxHeight: "calc(100vh - 100px)"}}
            >
              <div className="relative" style={{height: 200}}>
                <img className="w-full transition-all duration-1000 object-cover absolute h-full" src={data.featured_image.url} alt=""/>
              </div>
              <div className="p-6">
                <div>
                  <StoreProfile name={RichText.asText(data.store_name)}/>
                </div>
                <div className="mt-4">
                  <div className="font-bold">
                    <span>{RichText.asText(data.product_name)}</span>
                  </div>
                  <div className="text-gray-600 font-medium">
                    <span>Rp {data.price}</span>
                  </div>
                  <div className="text-gray-500 mt-4">
                    <RichText
                      render={data.description}
                    />
                  </div>
                  <div className="mt-4">
                    <a href={data.product_url.url} target="_blank" className="w-full block font-normal px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                      <div className="flex items-center justify-center">
                        <div className="mr-2">Detail Product</div>
                        <BsBoxArrowInUpRight/>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <Dialog.Close className="absolute right-4 top-4">
                <BsXCircleFill/>
              </Dialog.Close>
            </StyledContent>
          </DialogContentStyled>
      </Dialog.Root>
    </ProductItemStyled>
  )
}

export default ProductItem