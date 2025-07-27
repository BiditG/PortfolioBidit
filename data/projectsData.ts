interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'RAG-based MCQ Generator',
    description: `A Retrieval-Augmented Generation (RAG) powered mcq-generator using LangChain and Ollama, capable of processing custom knowledge sources like PDFs with conversational memory.`,
    imgSrc: '/static/images/rag-chatbot.png',
    href: 'https://github.com/BiditG/RAG-based-chat-application',
  },
  {
    title: 'Coffee Shop Website',
    description: `A sleek, responsive website for a coffee shop featuring product pages, animations, and modern design using HTML, CSS, and JavaScript.`,
    imgSrc: '/static/images/coffee-shop.png',
    href: 'https://github.com/BiditG/Coffee-shop-website',
  },
  {
    title: 'Stock Management Software',
    description: `A Python-based inventory management system designed for local businesses to manage stock levels, product categories, and sales efficiently.`,
    imgSrc: '/static/images/stock-management-software.jpg',
    href: 'https://github.com/BiditG/Stock-management-software',
  },
  {
    title: 'Hotel Booking Website',
    description: `A hotel booking platform built with full CRUD functionality and user-friendly UI to manage listings, availability, and reservations.`,
    imgSrc: '/static/images/hotel-booking.png',
    href: 'https://github.com/BiditG/Hotel-Booking-Website',
  },
]

export default projectsData
