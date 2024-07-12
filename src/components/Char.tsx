type CharProps = {
    char: string,
    img: string
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void
}
// import acheronImage from '../assets/img/acheron.png';
const Char = ({char,img, onDragStart} : CharProps) => {
  return (
    <div draggable onDragStart={onDragStart} className="">
      <img className="w-[70px] h-[100px] bg-[#deff22]" src={`/img/${img}`} alt="" />
      {char}
    </div>
  )
}

export default Char
