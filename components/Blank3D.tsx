import Image from "next/image"

export default function Blank3D() {
  return (
    <div className="py-10">
      <Image
        src={"/vercel.svg"}
        alt=""
        width={30}
        height={30}
        loading="eager"
        className="bg-cover w-65 h-65"
      />
    </div>
  )
}

