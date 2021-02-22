import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components"
import { motion } from "framer-motion"

export const ProductItemStyled = styled.li`
  height: 180px;
  cursor: pointer;
  .store-profile {
    height: 30px;
    width: 30px;
  }
  .flex-basis {
    flex-basis: 100%;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  img {
    transform: scale(1);
    transition: all 1s ease;
  }
  .product-item-inner {
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
`

export const StyledOverlay = styled(Dialog.Overlay)({
  backgroundColor: 'rgba(0, 0, 0, .7)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

export const DialogContentStyled = styled(Dialog.Content)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const StyledContent = styled(motion.div)({
  position: 'relative',
  maxWidth: 'fit-content',
  minWidth: 270,
  "@media (min-width: 640px)": {
    minWidth: 400,
  },
  maxHeight: '85vh',
  backgroundColor: 'white',
  '&:focus': {
    outline: 'none',
  },
})