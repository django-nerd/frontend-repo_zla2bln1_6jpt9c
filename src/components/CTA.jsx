import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/573242777370?text=${encodeURIComponent('Hola Dra. Silvia Rodrigo, me gustaría agendar una consulta.')}`

export default function CTA() {
  return (
    <section id="book" className="bg-black text-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Agenda tu valoración</h2>
        <p className="mt-3 text-white/80">Atención personalizada en Medellín, Colombia.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+573242777370" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-pink-50">
            <Phone className="mr-2 h-4 w-4" /> Llamar
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
