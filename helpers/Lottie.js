import { Player } from "@lottiefiles/react-lottie-player"
const Lottie = ({href}) => {
  return (
    <Player
      src={href}
      className="player"
      loop
      autoplay
      background='transparent'
    />
  )
}

export default Lottie
