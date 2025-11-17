"use client"
import { useState } from 'react'

const booksDatabase = [
  { id: 1, title: "Atomic Habits", author: "James Clear", category: "Pengembangan Diri", format: "PDF", pages: 320, year: 2018, image: "https://m.media-amazon.com/images/I/51Tlm0GZTXL.jpg", price: 45000, originalPrice: 89000 },
  { id: 2, title: "The Psychology of Money", author: "Morgan Housel", category: "Keuangan", format: "PDF", pages: 256, year: 2020, image: "/books/OIP.svg", price: 50000, originalPrice: 95000 },
  { id: 3, title: "Deep Work", author: "Cal Newport", category: "Produktivitas", format: "PDF", pages: 296, year: 2016, image: "/books/Deep-Work-by-Cal-Newport-Book.svg", price: 42000, originalPrice: 85000 },
  { id: 4, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", category: "Keuangan", format: "PDF", pages: 336, year: 1997, image: "/books/rich-dad-poor-dad-9.webp", price: 48000, originalPrice: 92000 },
  { id: 5, title: "The Warren Buffett Way", author: "Robert G. Hagstrom", category: "Investasi", format: "PDF", pages: 304, year: 2013, image: "/books/71MDz2FR1dL._SL1500_.svg", price: 52000, originalPrice: 104000 },
  { id: 6, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psikologi", format: "PDF", pages: 499, year: 2011, image: "https://m.media-amazon.com/images/I/41wI53OEpIL.jpg", price: 55000, originalPrice: 110000 },
  { id: 7, title: "The Lean Startup", author: "Eric Ries", category: "Bisnis", format: "PDF", pages: 336, year: 2011, image: "https://m.media-amazon.com/images/I/51T-sMqSMiL.jpg", price: 47000, originalPrice: 94000 },
  { id: 8, title: "Zero to One", author: "Peter Thiel", category: "Bisnis", format: "PDF", pages: 224, year: 2014, image: "https://m.media-amazon.com/images/I/71d3cBqFDDL._SL1500_.jpg", price: 46000, originalPrice: 92000 },
  { id: 9, title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "Pengembangan Diri", format: "PDF", pages: 381, year: 1989, image: "https://m.media-amazon.com/images/I/51fEz-BF5BL.jpg", price: 49000, originalPrice: 98000 },
  { id: 10, title: "Sapiens", author: "Yuval Noah Harari", category: "Sejarah", format: "PDF", pages: 443, year: 2011, image: "https://m.media-amazon.com/images/I/71f5Yqd9ADL._SL1500_.jpg", price: 54000, originalPrice: 108000 },
]

export default function PerpustakaanDigital() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const categories = ['Semua', 'Pengembangan Diri', 'Keuangan', 'Produktivitas', 'Investasi', 'Psikologi', 'Bisnis', 'Sejarah']

  const filteredBooks = booksDatabase.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Semua' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Perpustakaan Digital</h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">Cari dan temukan buku PDF favorit Anda dari koleksi lengkap kami</p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Cari judul buku atau nama penulis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none shadow-lg text-lg"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Ditemukan <span className="font-bold text-primary">{filteredBooks.length}</span> buku
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <div key={book.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 group">
                <div className="p-6 bg-gradient-to-br from-primary-light/20 to-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/0 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {book.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{book.title}</h3>
                  <p className="text-slate-600 mb-3">oleh {book.author}</p>
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <span>📄 {book.pages} hal</span>
                    <span>📅 {book.year}</span>
                    <span className="font-semibold text-red-600">{book.format}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">Rp {book.price.toLocaleString('id-ID')}</span>
                    <span className="text-sm text-slate-400 line-through">Rp {book.originalPrice.toLocaleString('id-ID')}</span>
                  </div>
                  <a
                    href={`https://wa.me/6282141733187?text=Halo,%20saya%20ingin%20beli%20buku%20${encodeURIComponent(book.title)}%20oleh%20${encodeURIComponent(book.author)}%20(Rp%20${book.price.toLocaleString('id-ID')})`}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                  >
                    🛒 Beli Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Buku tidak ditemukan</h3>
              <p className="text-slate-600 mb-6">Coba kata kunci lain atau hubungi kami untuk request buku</p>
              <a
                href="https://wa.me/6282141733187"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                💬 Chat WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tidak Menemukan Buku yang Anda Cari?</h2>
          <p className="text-lg text-slate-700 mb-8">Kami siap membantu mencari buku langka atau request khusus untuk Anda</p>
          <a
            href="/request-buku-langka"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
          >
            📝 Request Buku Langka
          </a>
        </div>
      </section>
    </div>
  )
}
