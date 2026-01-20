import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ---------------- BLOG DATA (API READY) ---------------- */
const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    date: "January 28, 2024",
    author: "Esther",
    category: "Furniture",
    title: "Building Gains Into Housing Stocks And How To Trade The Sector",
    excerpt:
      "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    date: "January 31, 2024",
    author: "Angel",
    category: "Interior",
    title: "92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans",
    excerpt:
      "Mortgage applications to purchase a home, however, dropped 4% last week compared...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
    date: "January 28, 2024",
    author: "Colleen",
    category: "Architecture",
    title: "We Are Hiring ‘Moderately,’ Says Compass CEO",
    excerpt:
      "New listings were down 20% year over year in March, according to Realtor.com, and total inventory...",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    date: "February 02, 2024",
    author: "David",
    category: "Real Estate",
    title: "Top Home Buying Tips You Should Know in 2024",
    excerpt:
      "Experts suggest planning finances early and choosing locations wisely to get the best value...",
  },
];

export function LatestGuidesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <p className="text-sm text-red-600 font-semibold uppercase tracking-widest mb-3">
            Latest News
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Helpful Homeya Guides
          </h2>
        </div>

        {/* ================= SWIPER ================= */}
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        //   pagination={{
        //     clickable: true,
        //     bulletClass:
        //       "swiper-pagination-bullet !bg-gray-300 !opacity-100",
        //     bulletActiveClass:
        //       "!bg-red-600 !w-3 !h-3",
        //   }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* DATE BADGE */}
                  <span className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-md">
                    {item.date}
                  </span>
                </div>

                {/* META */}
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-gray-900">
                    {item.author}
                  </span>{" "}
                  · {item.category}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-red-600 transition">
                  {item.title}
                </h3>

                {/* EXCERPT */}
                <p className="text-gray-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
