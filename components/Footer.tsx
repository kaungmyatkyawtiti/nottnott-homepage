export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="py-1 text-center text-[15px] text-muted-foreground">
      © {year} Kaung Myat Kyaw. All Rights Reserved.
    </div>
  )
}
