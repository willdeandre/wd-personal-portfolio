'use client'
import React from "react";

const books = [
  {
    title: "Basketball on Paper",
    author: "Dean Oliver",
    image: "https://substackcdn.com/image/fetch/$s_!Mmtd!,w_520,h_272,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3c64972f-dd22-4833-bd63-9fc3f09f27d7_1532x2048.jpeg",
    link: "https://www.amazon.com/Basketball-Paper-Rules-Performance-Analysis/dp/1574886886",
    description: "XXXXXXX",
  },
  {
    title: "Betaball",
    author: "Erik Malinowski",
    image: "https://m.media-amazon.com/images/I/71TX7nBYszL.jpg",
    link: "https://www.amazon.com/Betaball-Silicon-Science-Greatest-Basketball/dp/1501158198/ref=sr_1_1?crid=1T9N3TSF7AJQ7&dib=eyJ2IjoiMSJ9.E_kHo6hVPDig5bu97ZlMrg.aJhu5Al5cc49t7PdSO4lCNw41D5W9u3hUKHrqyZWk5Q&dib_tag=se&keywords=betaball&qid=1749589366&s=books&sprefix=betaball%2Cstripbooks%2C178&sr=1-1",
    description: "XXXXXXX",
  },
  {
    title: "Sprawlball",
    author: "Kirk Goldsberry",
    image: "https://m.media-amazon.com/images/I/71cfWfPL5LL._UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.com/SprawlBall-Visual-Tour-New-Era/dp/0358329752/ref=sr_1_1?crid=2IUHQHNE7RGRC&dib=eyJ2IjoiMSJ9.x0aI_RkCLsmfYw7wpvQGj94wEucTyRPNoejrNmeKwrA.7YoLlwU3UqtoxuEQihoxu1AP45DmqdVGeNiJbH4s2CE&dib_tag=se&keywords=sprawlball&qid=1749589552&s=books&sprefix=sprawlball%2Cstripbooks%2C160&sr=1-1",
    description: "XXXXXXX",
  },
];

const podcasts = [
  {
    title: "Dunc'd On Prime",
    link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://open.spotify.com/show/7rPj9HV9s5gwPnyPIruxKU&ved=2ahUKEwjV3rGJ4ueNAxWvJTQIHXLENp4QFnoECCoQAQ&usg=AOvVaw3ky3fssScIkfxiKpnMVKHG",
    image: "https://i.scdn.co/image/ab67656300005f1fc4fd8602bedf9632bcc9c427",
    description: "XXXXXXX",
  },
  {
    title: "The Hoop Collective",
    link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://open.spotify.com/show/4mOLvZqMud0JromeBgLpIh&ved=2ahUKEwjt0bf-4eeNAxVWIzQIHf_2MyMQFnoECBsQAQ&usg=AOvVaw02HYFQxaBBk0D9cNvj_AF0",
    image: "https://i.scdn.co/image/ab6765630000ba8ae3feecd3eeef60f26d00c8a0",
    description: "XXXXXXX",
  },
  {
    title: "Thinking Basketball",
    link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://open.spotify.com/show/12kpkAvUj6LGxzViDIH0qH&ved=2ahUKEwibiJ_o4eeNAxXyHDQIHSLBH2AQFnoECBQQAQ&usg=AOvVaw1uuAyzCA35TcQWBVsiS47D",
    image: "https://i.scdn.co/image/ab6765630000ba8a9149b4a15e1b0f32912ce02c",
    description: "XXXXXXX",
  },
];

const instagrams = [
  {
    name: "@nba.in_depth",
    url: "https://instagram.com/nba.in_depth",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjJ5zluXWSrsjdKOAYanw-QFLb0AdymbFug&s",
    description: "XXXXXXX",
  },
  {
    name: "@swishcultures",
    url: "https://instagram.com/swishcultures",
    image: "https://cdn.voyagela.com/wp-content/uploads/2020/06/personal_photo-72.png",
    description: "XXXXXXX",
  },
  {
    name: "@nbatradecenter",
    url: "https://instagram.com/nbatradecenter",
    image: "https://i.imgur.com/gBuBc2v.png",
    description: "XXXXXXX",
  },
];

const FlipCard = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flip-card-container block"
    >
      <div className="flip-card">
        {children}
      </div>
    </a>
  );
};


export default function MediaPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E5F4E3' }}>
      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
          width: 100%;
          height: 160px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease-in-out, scale 0.3s ease-in-out;
          transform-style: preserve-3d;
        }

        .flip-card-container:hover .flip-card {
          transform: rotateY(180deg) scale(1.05);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 2px solid;
          background-color: white;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #f8fafc;
        }
`}</style>
      <main className="max-w-6xl mx-auto py-8 px-4" style={{ paddingLeft: '290px' }}>
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Media & Recommendations</h1>

        {/* Books Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary hover:border-primary hover:shadow-xl transition-all duration-300 h-40">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-gray-50">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors mb-1 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 text-sm italic">{book.author}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Podcasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast) => (
              <a
                key={podcast.title}
                href={podcast.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary hover:border-primary hover:shadow-xl transition-all duration-300 h-40">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-white">
                      <img
                        src={podcast.image}
                        alt={podcast.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors mb-2">
                        {podcast.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Instagram Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">IG Accounts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagrams.map((account) => (
              <a
                key={account.name}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent hover:border-primary hover:shadow-xl transition-all duration-300 h-40">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-md flex-shrink-0 bg-accent">
                      <img
                        src={account.image}
                        alt={account.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-accent group-hover:text-primary transition-colors mb-2">
                        {account.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}