import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Phone, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '+573242777370'
const WHATSAPP_URL = `https://wa.me/573242777370?text=${encodeURIComponent('Hola Dra. Silvia Rodrigo, me gustaría agendar una consulta.')}`

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/80"
        >
          Cirugía Plástica | Medellín, Colombia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Dra. Silvia Rodrigo
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-fuchsia-200 to-amber-200">
            Belleza refinada, resultados naturales
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-5 max-w-2xl text-white/80"
        >
          Experiencia en Rinoplastia, Facelift, Blefaroplastia, Lipoescultura, Inyectables y terapias de piel. Un enfoque de lujo, discreto y personalizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#book" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow/30 shadow-white/10 transition hover:bg-pink-50">
            <Phone className="mr-2 h-4 w-4" /> Reservar consulta
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
