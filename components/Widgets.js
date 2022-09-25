
import { HiVideoCamera,HiDotsHorizontal } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs';
import Contact from './Contact';

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Nark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2">
      <div className='flex justify-between items-center text-gray-500 md-5 '>
        <h2 className="text-xl"> contacts</h2>
        <div className="flex space-x-2 ">
            <HiVideoCamera className="h-6"/>
            <BsSearch className="h-6"/>
            <HiDotsHorizontal className="h-6"/> 
        </div>
      </div>
   {contacts.map(contact =>(
    <Contact  key={contact.src} src={contact.src} name={contact.name} />
   ))}
    </div>
  );
}

export default Widgets;
