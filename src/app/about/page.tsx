import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 text-center">
          <h1 className="font-serif text-4xl font-bold text-gray-800">About Me!</h1>
          <hr className="my-4 border-gray-300" />
          <p className="text-lg font-sans text-gray-700 leading-7 mb-4">
            My name is <b className="text-blue-600">Hooria Khan</b>, and I am from <b>Karachi</b>. I have completed my intermediate in commerce, and I am currently pursuing my passion for web development. My expertise lies in front-end development, where I utilize technologies like <b>HTML, CSS, TypeScript</b>, and frameworks such as <b>React and Next.js</b>.
          </p>
          <p className="text-lg font-sans text-gray-700 leading-7 mb-4">
            Apart from development, I manage my online Shopify store, <b className="text-blue-600">Dash Deals</b>. I oversee all aspects, from product listings to customer engagement. Additionally, I offer services on <b className="text-blue-600">Fiverr</b>, including <b>graphic design</b>, <b>SEO optimization</b>, and <b>thumbnail creation</b>.
          </p>
          <p className="text-lg font-sans text-gray-700 leading-7">
            In my free time, I enjoy exploring new technologies and honing my freelancing skills. My future aspiration is to pursue a <b className="text-blue-600">BSCS</b> and evolve into a <b className="text-blue-600">full-stack developer</b>, contributing to impactful projects in web development and digital marketing.
          </p>
        </div>
      </div>
      <Link href="/about/nested-rout">
         <button className=" bg-blue-700 py-3 mt-3 text-yellow-200 px-2 font-mono">More Nested About</button>
         </Link>
    </div>
  );
}

