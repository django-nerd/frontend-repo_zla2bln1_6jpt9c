import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Eye, Syringe, Wand2, User, Scissors } from 'lucide-react'

const services = [
  { title: 'Rinoplastia', desc: 'Estructura y respiración armonizadas, con resultados naturales.', icon: Scissors },
  { title: 'Facelift', desc: 'Rejuvenecimiento facial avanzado con cicatrices discretas.', icon: User },
  { title: 'Blefaroplastia', desc: 'Párpados superiores e inferiores con mirada fresca y descansada.', icon: Eye },
  { title: 'Lipoescultura', desc: 'Definición corporal precisa con enfoque artístico.', icon: Wand2 },
  { title: 'Inyectables', desc: 'Toxina botulínica y ácido hialurónico con técnica sutil.', icon: Syringe },
  { title: 'Terapias de piel', desc: 'Protocolos combinados para textura, brillo y tono.', icon: Sparkles },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Servicios</h2>
          <p className="mt-3 text-gray-600">Procedimientos personalizados con enfoque de lujo.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-pink-50 p-3 text-pink-600">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
