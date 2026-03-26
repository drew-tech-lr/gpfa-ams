import Image from "next/image";
import Button from "./components/button/Button";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          iusto fugit soluta? Velit ipsum aliquid veritatis deleniti cumque, at
          harum, error sit molestiae culpa repudiandae sapiente et doloremque
          veniam sint?
        </p>
         <Button btnLabel='Get Started' className="p-5" variant="primary" />
         <Button btnLabel='Submit Application' variant="secondary" />
         <Button btnLabel='Submit Application' variant="accent" icon={ <MdNavigateNext className='icon' size={20} /> } />
      </main>
      <Footer />
      <Slider />
    </div>
  );
}
